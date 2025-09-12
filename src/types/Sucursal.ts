export interface Sucursal {
  nombre: string;
  mapsUrl: string;
  vigencia?: string;
  lat: number;
  lng: number;
  direccion: string;
  ciudad?: string;
  cp?: string;
  colonia?: string;
  telefono?: string;
  horario?: string;
  promocion?: string;
  servicios: string[];
  caracteristicas?: string[];
  comoLlegar?: string[];
  imagen?: string;
  rating?: string;
  reviews?: string;
  btn?: string;
  mapBtn?: string;
}
