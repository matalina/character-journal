import type { Item } from "./items";

export interface AbilityScore {
  name: string;
  abbreviation: string;
  description: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  abilityScore: AbilityScore;
  description: string;
}

export interface Alignment {
  name: string;
  abbreviation: string;
  description: string;
}

export interface Background {
  name: string;
  description: string;
  proficiencies: Proficiency[];
  languages: Language[];
  equipment: Item[];
  feature: Feature;
  personalityTraits: Traits[]; 
  ideals: Traits[];
  bonds: Traits[];
  flaws: Traits[];
}

export interface ProficiencyType {
  name: string;
  description: string;
}

export interface Proficiency {
  name: string;
  description: string;
  type: ProficiencyType;
}

export interface Race {
  name: string;
  description: string;
  speed: number;
  abilityBonus: AbilityBonus[];
  alignmentText: string;
  ageText: string;
  size: Size;
  sizeText: string;
  proficiencies: Proficiency[];
  languages: Language[];
  languageText: string;
  traits: Traits[];
  subRaces: Subrace[];
}

export interface Subrace {
  name: string;
  description: string;
  abilityBonus?: AbilityBonus[];
  proficiencies?: Proficiency[];
  languages?: Language[];
  languageText?: string;
  traits?: Traits[];
}

export interface Size {
  name: string;
  description: string;
}

export interface AbilityBonus {
  ability: AbilityScore;
  bonus: number;
}
export interface Language {
  name: string;
  description: string;
  speakers: Race[];
  script: ScriptType;
}

export interface ScriptType {
  name: string;
  description: string;
}

export interface Feature {
  name: string;
  description: string;
}

export interface ClassFeature extends Feature {
  class: PlayableClass;
  level: number;
  prerequeisite: {

  };
}

export interface SubclassFeature extends ClassFeature {
  subclass: Subclass;  
}

export interface Traits {
  trait: string;
  alignment?: Alignment[];
  proficiencies: Proficiency[];
}

export interface PlayableClass {
  name: string;
  description: string;
  hitDie: number;
  proficiency: Proficiency[];
  equipment: Item[];
  levels: Level[];
  prerequisite: {
    abilityScore: {
      score: AbilityScore;
      minimumScore: number;
    },
    proficiencies: Proficiency;
  };
  subClass: Subclass[]
}

export interface Subclass {
  name: string;
  description: string
  class: PlayableClass;
  flavor: Flavor;
  levels: Level[];
}

export interface Flavor {
  name: string;
  class: PlayableClass;
  description: string;
}

export interface Level {
  name: string;
  class: string;
  level: number;
  abilityScoreBonus: number;
  proficiencyBonus: number;
  features: Feature[];
  classSpecific: { [key: string]: number };
}

export interface Condition {
  name: string;
  description: string;
}

export interface Feat {
  name: string;
  description: string;
  prerequisite: {
    abilityScore: {
      score: AbilityScore;
      minimumScore: number;
    }
  }
}