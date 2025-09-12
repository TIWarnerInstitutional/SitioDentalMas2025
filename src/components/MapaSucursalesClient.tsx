"use client";
import MapaSucursales from "./MapaSucursales";

import { Sucursal } from "../types/Sucursal";

interface Props {
  search?: string;
  selected?: Sucursal | null;
  setSelected?: (s: Sucursal | null) => void;
  hideList?: boolean;
  preview?: boolean;
}

export default function MapaSucursalesClient(props: Props) {
  return <MapaSucursales {...props} />;
}
