import { Component, OnInit } from '@angular/core';
import {ITag, TagsService} from "../../services/tags.service";

@Component({
  selector: 'rh-key-skill-btns',
  templateUrl: './key-skill-btns.component.html',
  styleUrls: ['./key-skill-btns.component.scss']
})
export class KeySkillBtnsComponent implements OnInit {

  keySkills: ITag[];

  constructor(private tagsService: TagsService) {
    this.keySkills = tagsService.tags;
  }

  ngOnInit() {}

  toogleSkillSelection(tag: ITag) {
    this.tagsService.toogleTagSelection(tag.displayName);
  }

  disableIfOneBtn(keySkill: ITag) {
    const targetKeySkills = this.keySkills.filter(e => e.isSelected);
    return (
      targetKeySkills.length === 1 &&
      targetKeySkills[0].displayName === keySkill.displayName
    );
  }
}
