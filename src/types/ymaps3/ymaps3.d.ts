declare module "ymaps3" {
    export type LngLat = [number, number];
  
    export class Entity {}
  
    export class YMap extends Entity {
      constructor(
        element: HTMLElement,
        props: {
          location: {
            center: LngLat;
            zoom: number;
          };
        }
      );
      addChild(child: Entity): void;
      removeChild(child: Entity): void;
    }
  
    export class YMapDefaultMarkersLayer extends Entity {}
    export class YMapDefaultSchemeLayer extends Entity {}
    export class YMapDefaultMarker extends Entity {
      constructor(props: { coordinates: LngLat });
    }
  }
  