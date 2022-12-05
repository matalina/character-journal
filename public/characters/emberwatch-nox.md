---
name: Que "Nox" Ahnvaeama
race: City Elf
class: Warlock
level: 1
ability:
  - str: 12
  - dex: 15
  - con: 14
  - int: 12
  - wis: 14
  - cha: 14
proficiencyBonus: +2
speed:
  - walking: 30ft
hp:
  - max: 10
  - current: 10
  - temp: 10
saves:
  - str: 1
  - dex: 2
  - con: 2
  - int: 1
  - wis: 4
  - cha: 4  
init: 2
ac:
  - base: 12
defenses:
  - resistance: necrotic, poison
  - immunity: magical sleep
senses:
  - passivePerception: 14
  - passiveInvestigation: 13
  - passiveInsight: 12  
  - darkvision: 60ft
conditions: []
skills:
  - acrobatics: 2
  - animalHandling: 2
  - arcana: 1
  - athletics: 1
  - deception: 4
  - history: 1
  - insight: 2
  - indimidation: 2
  - investigation: 3
  - medicine: 2
  - nature: 1
  - perception: 4
  - performance: 2
  - persuasion: 2
  - religion: 1
  - slightOfHand: 4    
  - stealth: 4
  - survival: 2
proficiencies:
  - armor: light armor
  - weapons: simple weapons
  - tools: disguise kit, painter's tools, thieves' tools
  - languages: common, elvish
attack:
  - name: Eldritch Blast
    type: cantrip - warlock
    range: 120ft
    hit: 4
    damage: 1d10
    damageType: force
    notes: V/S
  - name: Unarmed Strike
    type: melee
    range: 5ft
    hit: 3
    damage: 2
    damageType: bludgening
bonus actions:
  - name: two-weapon fighting
    type: combat
  - name: expeditious retreat
    type: spell
  - name: healing light
    max: 2
    used: 0
reactions:
  - name: opportunity attack
    type: combat            
spellcasting:
  - attack: 4
  - modifier: 2
  - saveDc: 12
  - spellSlots:
    - pact: 1
  - catrips:
    - name: eldritch blast
      time: 1 action
      range: 120ft
      hit: 4
      damage: 1d10
      damageType: force
      notes: V/S
      description: A beam of crackling energy streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 force damage. The spell creates more than one beam when you reach higher levels: two beams at 5th level, three beams at 11th level, and four beams at 17th level. You can direct the beams at the same target or at different ones. Make a separate attack roll for each beam.
    - name: light
      time: 1 action
      range: touch
      dc: 12
      dcAbility: dex
      duration: 1 hour
      areaOfEffect: 20 ft sphere
      notes: V/M (a firefly or phosphorescent moss)
      description: You touch one object that is no larger than 10 feet in any dimension. Until the spell ends, the object sheds bright light in a 20-foot radius and dim light for an additional 20 feet. The light can be colored as you like. Completely covering the object with something opaque blocks the light. The spell ends if you cast it again or dismiss it as an action. If you target an object held or worn by a hostile creature, that creature must succeed on a Dexterity saving throw to avoid the spell.
    - name: mage hand
      time: 1 action
      range: 30ft
      duration: 1 min
      notes: V/S   
      description: A spectral, floating hand appears at a point you choose within range. The hand lasts for the duration or until you dismiss it as an action. The hand vanishes if it is ever more than 30 feet away from you or if you cast this spell again. You can use your action to control the hand. You can use the hand to manipulate an object, open an unlocked door or container, stow or retrieve an item from an open container, or pour the contents out of a vial. You can move the hand up to 30 feet each time you use it. The hand can't attack, activate magic items, or carry more than 10 pounds.
    - name: message
      time: 1 action
      range: 120ft
      duration: 1 round
      notes: V/S/M (a short piece of copper wire) 
      description: You point your finger toward a creature within range and whisper a message. The target (and only the target) hears the message and can reply in a whisper that only you can hear. You can cast this spell through solid objects if you are familiar with the target and know it is beyond the barrier. Magical silence, 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood blocks the spell. The spell doesn't have to follow a straight line and can travel freely around corners or through openings.
    - name: prestidigitation
      time: 1 action
      range: 10ft
      duration: 1 hour
      notes: V/S  
      description: This spell is a minor magical trick that novice spellcasters use for practice. You create one of the following magical effects within range 1. You create an instantaneous, harmless sensory effect, such as a shower of sparks, a puff of wind, faint musical notes, or an odd odor 2. You instantaneously light or snuff out a candle, a torch, or a small campfire. 3. You instantaneously clean or soil an object no larger than 1 cubic foot. 4. You chill, warm, or flavor up to 1 cubic foot of nonliving material for 1 hour. 5. You make a color, a small mark, or a symbol appear on an object or a surface for 1 hour. 6. You create a nonmagical trinket or an illusory image that can fit in your hand and that lasts until the end of your next turn. If you cast this spell multiple times, you can have up to three of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action. 
    - name: sacred flame
      time: 1 action
      range: 60ft
      dc: 12
      dcAbility: dex
      damage: 1d8
      damageType: radiant
      notes: V/S  
      description: Flame-like radiance descends on a creature that you can see within range. The target must succeed on a Dexterity saving throw or take 1d8 radiant damage. The target gains no benefit from cover for this saving throw. The spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).
  - warlock
    - name: cure wounds
      time: 1 action
      atLevel: 1
      range: touch
      heal: 1d8+2
      notes: V/S 
      description: A creature you touch regains a number of hit points equal to 1d8 + your spellcasting ability modifier. This spell has no effect on undead or constructs. At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the healing increases by 1d8 for each slot level above 1st.  
    - name: expeditious retreate
      time: 1 bonus action
      atLevel: 1
      range: self
      duration: 10 min
      concentration: true
      notes: V/S  
      description: This spell allows you to move at an incredible pace. When you cast this spell, and then as a bonus action on each of your turns until the spell ends, you can take the Dash action.
- inventory:
  - outerwear:
    - name: common clothes
      weight: 3
      qty: 1
  - equipment:
    - name: crossbow bolts
      weight: 1.5
      qty: 20
    - name: light crossbow
      weight: 5
      qty: 1
    - name: dagger
      weight: 1
      qty: 1
    - name: leather armor
      weight: 10
      qty: 1      
  - backpack:
    - name: blanket
      weight: 3
      qty: 1
    - name: disguise kit
      weight: 3
      qty: 1  
    - name: mess kit
      weight: 1
      qty: 1  
    - name: painter's supplies
      weight: 5
      qty: 1  
    - name: water skin
      weight: 5
      qty: 1  
  - pouch:
    - name: crystal
      weight: 1
      qty: 1   
    - name: thieves' tools
      weight: 1
      qty: 1   
    - name: tinderbox
      weight: 1
      qty: 1  
  - otherPossessions:
    - A hand painted map of Emberwatch 
    - A pet ferret named Ebrath (friend) shared with Alex
    - An empty glass vial that smells of perfume when opened that reminds Nox of his mother
---



