import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-topic-section',
  templateUrl: './topic-section.component.html',
  styleUrls: ['./topic-section.component.scss']
})

export class TopicSectionComponent implements OnInit {
  @Input() topicName!: string;
  @Input() topicIconName!: string;

  topicIconSRC = '';

  ngOnInit(): void {
    this.topicIconSRC = `assets/icons/${this.topicIconName}.svg`;
  }
}
