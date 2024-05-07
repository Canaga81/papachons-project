import Card from "../Card/Card";

const Body = ({ data }) => {
  return (
    <>
      <div className="cards_container">
        {data?.filter((item) => item.category === "Pizzalar")?.map((item, idx) => (
          <Card key={idx} item={item} />
        ))}
      </div>
    </>
  );
};

export default Body;