import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  CONSUMABLE_CATEGORIES,
  CONSUMABLES,
  ConsumableCategoryId,
} from '../../data/consumables';

type FilterKey = 'all' | ConsumableCategoryId;

@Component({
  selector: 'app-consumables',
  imports: [RouterLink],
  templateUrl: './consumables.html',
  styleUrl: './consumables.scss',
})
export class Consumables {
  readonly categories = CONSUMABLE_CATEGORIES;
  readonly active = signal<FilterKey>('all');
  readonly search = signal('');

  readonly filters: { key: FilterKey; label: string }[] = [
    { key: 'all', label: 'All Consumables' },
    { key: 'filtration', label: 'Filtration' },
    { key: 'hplc-syringe', label: 'Syringe Filters & Storage' },
    { key: 'hplc-fittings', label: 'PEEK Fittings' },
    { key: 'hplc-accessories', label: 'Tubing & Accessories' },
    { key: 'hplc-gc', label: 'HPLC / GC Parts' },
  ];

  readonly filteredItems = computed(() => {
    const key = this.active();
    const q = this.search().trim().toLowerCase();

    return CONSUMABLES.filter((item) => {
      const matchesCategory = key === 'all' || item.category === key;
      if (!matchesCategory) {
        return false;
      }
      if (!q) {
        return true;
      }
      const haystack = [item.name, item.description, ...(item.specs ?? [])].join(' ').toLowerCase();
      return haystack.includes(q);
    });
  });

  readonly visibleCategories = computed(() => {
    const key = this.active();
    const items = this.filteredItems();
    const used = new Set(items.map((i) => i.category));
    return this.categories.filter((c) => (key === 'all' || c.id === key) && used.has(c.id));
  });

  readonly resultCount = computed(() => this.filteredItems().length);

  setFilter(key: FilterKey): void {
    this.active.set(key);
  }

  onSearch(value: string): void {
    this.search.set(value);
  }

  itemsFor(categoryId: ConsumableCategoryId) {
    return this.filteredItems().filter((item) => item.category === categoryId);
  }
}
