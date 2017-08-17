import {AfterViewInit, Component, ElementRef} from '@angular/core';

import {SwaggerUIBundle, SwaggerUIStandalonePreset} from 'swagger-ui-dist';

@Component({
  selector: 'app-swagger',
  templateUrl: './swagger.component.html',
  styleUrls: ['./swagger.component.css']
})
export class SwaggerComponent implements AfterViewInit {

  constructor(private el: ElementRef) {
  }

  ngAfterViewInit() {
    const ui = SwaggerUIBundle({
      url: 'http://petstore.swagger.io/v2/swagger.json',
      domNode: this.el.nativeElement.querySelector('.swagger-container'),
      deepLinking: true,
      presets: [
        SwaggerUIBundle.presets.apis,
        SwaggerUIStandalonePreset
      ],
      plugins: [
        SwaggerUIBundle.plugins.DownloadUrl
      ],
      layout: 'StandaloneLayout'
    });
  }

}
