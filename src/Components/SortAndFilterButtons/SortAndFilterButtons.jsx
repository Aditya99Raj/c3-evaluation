export const SortAndFilterButtons = ({ handleSort }) => {
  return (
    <div className="sortButtons" style={{
      display: 'flex',
      justifyContent: "space-around",
      backgroundColor:"green",
    }}>
      {/*
        Create 4 sorting buttons here to sort by following criteria:

        sort title in Ascending order  class: sortByTitleAsc
        sort title in Descending order class: sortByTitleDesc
        sort price asending order      class: sortByPriceAsc
        sort price descending order    class: sortByPriceDesc

        on every button click, call the reusable sorting function
        you received from Parent component, 
        and sort the data.

      */}
      <button onClick={handleSort}>Sort by Title Asc</button>
      <button onClick={handleSort}>Sort by Title Dsc</button>
      <button onClick={handleSort}>Sort by Price Asc</button>
      <button onClick={handleSort}>Sort by Price Dsc</button>
    </div>
  );
};
