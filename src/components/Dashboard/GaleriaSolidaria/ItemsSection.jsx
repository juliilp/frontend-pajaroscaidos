import CardItem from "./CardItem";

export default function ItemsSection({ items, openEditModal }) {
  return (
    <div className="hiddem sm:flex flex-wrap justify-center gap-3">
      {items?.map((item, key) => (
        <CardItem item={item} key={key} openEditModal={openEditModal} />
      ))}
    </div>
  );
}
