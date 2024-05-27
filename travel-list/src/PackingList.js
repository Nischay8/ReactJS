import { Item } from "./App";

export function PackingList({ items, onDeleteItem, onToggleItem }) {
    return (
        <div>
            <ul className="list">{items.map((item) => (<Item item={item} onDeleteItem={onDeleteItem} key={item.id} onToggleItem={onToggleItem} />))}</ul>;
        </div>
    );
}
