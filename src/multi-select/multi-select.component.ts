import { NgFor, NgClass, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Component({
  selector: 'app-multi-select',
  imports: [NgFor, NgClass, NgIf],
  templateUrl: './multi-select.component.html',
  styleUrl: './multi-select.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultiSelectComponent {
  @Input() options: any[] = [];
  @Input() selectedValues: any[] = [];
  @Input() maxSelected: number = 3;
  @Output() selectedValuesChange = new EventEmitter<any[]>();

  opened = false;

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {

    const clickedInside = this.elementRef.nativeElement.contains(event.target);

    if (!clickedInside) {
      this.opened = false;
      console.log('Clicked outside!');
    }
  }

  constructor(private elementRef: ElementRef) {}

  toggleSelection(value: any) {
    const index = this.selectedValues.indexOf(value);

    if (index > -1) {
      this.selectedValues.splice(index, 1);
    } else {
      this.selectedValues.push(value);
    }

    this.selectedValuesChange.emit(this.selectedValues);
  }

  isSelected(value: any): boolean {
    return this.selectedValues.includes(value);
  }

  selected() {
    if (this.selectedValues.length === 0) {
      return 'Няма';
    } else {
      return this.options
        .filter(option => this.selectedValues.indexOf(option.value) > -1)
        .map(option => option.label)
        .join('; ')
    }
  }

  filter(event: any) {
    const term = event.target.value;
    this.options.forEach(option => {
      option.enabled = new RegExp(term, 'i').test(option.label)
    })
  }

  selectedCount() {
    return `${this.selectedValues.length} / ${this.maxSelected} избрани`;
  }
}
