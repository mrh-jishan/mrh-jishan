import {EventEmitter, Injectable} from '@angular/core';

export interface ITag {
  displayName: string;
  isSelected: boolean;
}

export const tagData = [
  {displayName: 'Angular', isSelected: true},
  {displayName: 'React.js', isSelected: true},
  {displayName: 'Node.js', isSelected: true},
  {displayName: 'ASP.NET', isSelected: true},
  {displayName: 'CSS', isSelected: true},
  {displayName: 'Others', isSelected: !true}
];


@Injectable()
export class TagsService {
  tags: ITag[];
  onTagUpdate = new EventEmitter();

  constructor() {
    this.tags = tagData;
  }

  toogleTagSelection(tagName: string) {
    const totalSelection = this.tags.reduce(
      (prev, current) => prev + (current.isSelected ? 1 : 0),
      0
    );
    const selectedSkill = this.tags.find(e => e.displayName === tagName);

    if (totalSelection <= 1 && selectedSkill.isSelected) return;

    selectedSkill.isSelected = !selectedSkill.isSelected;
    this.onTagUpdate.emit({
      tags: this.tags.filter(e => e.isSelected)
    });
  }
}
