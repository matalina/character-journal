import type { DiceFormula } from "./magic";

export interface Item {
  name: string;
  description: string;
  weight: number;
  cost: {
    quantity: number;
    unit: CoinType;
  },
  quality: Quality;
}

export interface Quality  {
  name: string;
  description: string;
  color: string;
}

export interface CoinType {
  name: string;
  abbreviation: string;
  goldValue: number;
}

export interface DamageType {
  name: string;
  description: string;
}

export interface ArmorType {
  name: string;
  description: string;
}

export interface WeaponType {
  name: string;
  description: string;
}

export interface RangeType {
  name: string;
  description: string;
}

export interface Armor extends Item {
  type: ArmorType;
  armorClass: {
    base: number;
    dexBonus: boolean;
    maxBonus: number;
  }
  minStrength: number;
  stealthDisadvantage: boolean;
}

export interface Weapon extends Item{
  weaponType: WeaponType;
  damageType: DamageType;
  range: {
    type: RangeType;
    normal: number;
    long?: number;
  };
  damage: {
    dice: DiceFormula;
    type: DamageType;
  }
  properties: WeaponProperty[];
}

export interface WeaponProperty {
  name: string;
  description: string;
}

export interface VehicleType {
  name: string;
  description: string;
}

export interface Vehicle {
  type: VehicleType;
  speed: {
    quanitity: number;
    unit: string;
  };
  capacity: number;
}

export interface MagicItem extends Item {
  variant: boolean;
  variants: Variant[];
}

export interface Variant {
  name: string;
  description: string;
  quality: Quality;
}