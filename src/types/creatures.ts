import type { AbilityScore, Alignment, Background, Feature, Language, PlayableClass, Race, Skill, Subclass, Subrace, Traits } from "./character";
import type { DamageType, RangeType } from "./items";
import type { DiceFormula } from "./magic";

export interface Creature {
  name: string;
  description: string;
  hitPoints: number;
  hitDie: DiceFormula;
  baseAc: number;
  alignment: Alignment;
  speed: Speed[];
  proficiencyBonus: number;
  abilitieScores: AbilityScore[];
  skills: Skill[];
  features: Feature[];
  languages: Language[];
  actions: Action[];
}

export interface Monster extends Creature {
  legendaryActions: Action[];
}

export interface Character extends Creature {
  race: Race;
  subrace?: Subrace;
  background: Background;
  gender: Pronouns;
  description: string;
  traits: Traits[];
}

export interface NonPlayerCharacter extends Character {
  occupation: Occupation;
  residence: Location;
  workPlace: Location;
  plotHooks: string[];
}

export interface PlayerCharacter extends Character {
  class: PlayableClass;
  level: number;
  subclass?: Subclass;
}

export interface Pronouns {
  name: string;
  description: string;
}

export interface Occupation {
  name: string;
  description: string;
}

export interface Speed {
  name: string;
  description: string;
  distance: number;
}

export interface Action {
  name: string;
  description: string;
  type: ActionType;
  toHit?: number;
  reach?: {
    type: RangeType;
    value: number;
  }
  onHit?: DiceFormula;
  damageType: DamageType;
}

export interface ActionType {
  name: string;
  description: string;
}