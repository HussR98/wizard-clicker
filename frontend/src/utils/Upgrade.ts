export interface UpgradeProps {
    id: string;
    name: string;
    description: string;
    cost: number;
    unlocked: (state: any) => boolean;
    effect: (state: any) => boolean
    purchased: boolean
}

export default class Upgrade {
        id: string;
        name: string;
        description: string;
        cost: number;
        unlocked: (state: any) => boolean;
        effect: (state: any) => boolean
        purchased: boolean

    constructor({id, name, description, cost, unlocked, effect, purchased}: UpgradeProps) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.cost = cost;
        this.unlocked = unlocked;
        this.effect = effect;
        this.purchased = purchased;
    }

    purchase(state: any) {
        if (!this.purchased) {
            this.purchased = true;
            this.effect(state);
        }
        return state;
    }

    isUnlockable(state: any) {
        return this.unlocked(state)
    }

}