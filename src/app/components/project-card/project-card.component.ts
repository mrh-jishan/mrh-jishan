import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IProject} from "../../services/project-data.service";

@Component({
  selector: 'rh-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  @Input('project') project: IProject;
  @Output('select') select = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  onCardClick(project: IProject) {
    this.select.emit({ project });
  }

}
