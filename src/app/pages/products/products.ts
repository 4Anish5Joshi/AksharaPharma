import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  CATEGORY_LABELS,
  PRODUCT_COUNTS,
  PRODUCTS,
  Product,
  ProductCategory,
} from '../../data/products';

type FilterKey = 'all' | ProductCategory;

const PAGE_SIZE = 24;

@Component({
  selector: 'app-products',
  imports: [RouterLink],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products {
  readonly counts = PRODUCT_COUNTS;
  readonly pageSize = PAGE_SIZE;

  readonly categories: { key: FilterKey; label: string; count?: number }[] = [
    { key: 'all', label: 'All Products', count: PRODUCT_COUNTS.total + 2 },
    { key: 'nitrosamine', label: CATEGORY_LABELS.nitrosamine, count: PRODUCT_COUNTS.nitrosamine },
    {
      key: 'drug-impurity',
      label: CATEGORY_LABELS['drug-impurity'],
      count: PRODUCT_COUNTS['drug-impurity'],
    },
    { key: 'custom', label: CATEGORY_LABELS.custom },
  ];

  readonly categoryLabels = CATEGORY_LABELS;
  readonly search = signal('');
  readonly activeCategory = signal<FilterKey>('all');
  readonly page = signal(1);

  readonly filtered = computed(() => {
    const q = this.search().trim().toLowerCase();
    const cat = this.activeCategory();

    return PRODUCTS.filter((product) => {
      const matchesCategory = cat === 'all' || product.category === cat;
      if (!matchesCategory) {
        return false;
      }
      if (!q) {
        return true;
      }
      const haystack = [product.name, product.cas, product.description, ...(product.synonyms ?? [])]
        .join(' ')
        .toLowerCase();
      return haystack.includes(q);
    });
  });

  readonly resultCount = computed(() => this.filtered().length);

  readonly totalPages = computed(() => Math.max(1, Math.ceil(this.resultCount() / PAGE_SIZE)));

  readonly paged = computed(() => {
    const current = Math.min(this.page(), this.totalPages());
    const start = (current - 1) * PAGE_SIZE;
    return this.filtered().slice(start, start + PAGE_SIZE);
  });

  readonly pageLabel = computed(() => {
    const total = this.resultCount();
    if (!total) {
      return 'No products';
    }
    const current = Math.min(this.page(), this.totalPages());
    const start = (current - 1) * PAGE_SIZE + 1;
    const end = Math.min(current * PAGE_SIZE, total);
    return `Showing ${start}–${end} of ${total}`;
  });

  setCategory(key: FilterKey): void {
    this.activeCategory.set(key);
    this.page.set(1);
  }

  onSearch(value: string): void {
    this.search.set(value);
    this.page.set(1);
  }

  prevPage(): void {
    this.page.update((p) => Math.max(1, p - 1));
  }

  nextPage(): void {
    this.page.update((p) => Math.min(this.totalPages(), p + 1));
  }

  trackProduct(_index: number, product: Product): string {
    return product.id;
  }
}
