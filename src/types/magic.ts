import type { AbilityScore } from "./character";
import type { DamageType, RangeType } from "./items";

export interface MagicSchool {
  name: string;
  description: string;
}

export interface Spell {
  name: string;
  description: string;
  higherLevel?: string;
  range: RangeType;
  components: {
    verbal?: string;
    somatic?: string;
    material?: string;
  }
  ritual: boolean;
  duration: Time;
  concentration: boolean;
  castingTime: Time;
  level: number;
  attackType?: AttackType;
  damageType?: DamageType;
  damageAtSlotLevel?: {
    [key: number]: DiceFormula;
  };
  damageAtCharacterLevel?: {
    [key: number]: DiceFormula;
  };
  dc?: {
    type: AbilityScore;
    value: number;
    success: string;
    failure: string;
  }
  healAtSlotLevel?: {
    [key: number]: DiceFormula;
  }
  areofEffect: {
    type: AoEArea;
    size: number;
  }
  school: MagicSchool;
}

export interface AoEArea {
  name: string;
  description: string;
}

export interface DiceFormula {
  quantity: number;
  sides: number;
  modifier?: number;
  keepHighest?: number;
  keepLowest?: number;
  dropHighest?: number;
  dropLowest?: number;
}

export interface AttackType {
  name: string;
  description: string;
}

export interface Time {
  value?: number;
  units: string;
}