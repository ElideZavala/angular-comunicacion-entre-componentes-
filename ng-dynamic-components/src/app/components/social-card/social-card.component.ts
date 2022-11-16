import { Component, OnInit, Input, ComponentFactoryResolver, ViewChild, ViewContainerRef, SimpleChanges } from '@angular/core';
import { SocialCardType } from 'src/app/constants/social-card-type';
import { FbCardComponent } from '../fb-card/fb-card.component';
import { TwitterCardComponent } from '../twitter-card/twitter-card.component';

@Component({
  selector: 'app-social-card',
  templateUrl: './social-card.component.html',
  styleUrls: ['./social-card.component.scss']
})
export class SocialCardComponent implements OnInit {
  // sera la varivale que se le asigne al componente
  @Input() type: SocialCardType;

  // referencia al contenedor donde se cargara el componente dinamico
  @ViewChild('vrf', { read: ViewContainerRef }) vrf: ViewContainerRef;

  // metodo que se ejecuta cuando el componente es destruido
  cardTypes = SocialCardType;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.type.currentValue !== undefined) {
      // console.log(`card type changed to: ${changes.type.currentValue}`);
      this.loadDinamicComponent(changes.type.currentValue);
    }
  }

  loadDinamicComponent(type: SocialCardType): void {
    let component;
    switch (type) {
      case SocialCardType.Facebook:
        component = FbCardComponent;
        break;
      case SocialCardType.Twitter:
        component = TwitterCardComponent;
        break;
    }


    // se crea el componente dinamico
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component)

    // se limpia el contenedor antes de crear el nuevo componente
    this.vrf.clear();

    // elemento donde se cargara el componente
    this.vrf.createComponent(componentFactory);

  }

  ngOnInit(): void {
  }

}
