import { useState } from "react";
import menuData from "./DataMenu"

export default function Menu() {
  const [activeTab, setActiveTab] = useState(menuData[0].id);

  // Get all category titles from menuData
  const categories = ["All Menu", ...menuData.map(cat => cat.title)];

  // Get all items or filter by category
  const getFilteredItems = () => {
    if (activeTab === "All Menu") {
      return menuData.flatMap(category => 
        category.items.map(item => ({
          ...item,
          categoryTitle: category.title
        }))
      );
    }
    const category = menuData.find(cat => cat.id === activeTab);
    return category ? category.items.map(item => ({
      ...item,
      categoryTitle: category.title
    })) : [];
  };

  const filteredItems = getFilteredItems();

  return (
    <section id="menu" className="bg-gray-50 py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">

        <div>
            <h1
            className="text-3xl md:text-4xl text-center font-bold text-gray-800 mb-10 logo-font"
        
        >
            Our <span className="text-amber-500"> Menu</span>
            </h1>
        </div>
        {/* Category Tabs */}
        <div className="bg-gray-900 rounded-xl shadow-sm p-3 md:p-4 flex flex-wrap gap-6 justify-center border md:justify-center mb-12">
          {categories.map((tab) => {
            const tabId = tab === "All Menu" ? "All Menu" : menuData.find(cat => cat.title === tab)?.id;
            console.log("Tab ID:", tabId);
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tabId)}
                className={`px-5 md:px-6 py-2 md:py-3 rounded-full text-xs text-white border border-amber-500 md:text-sm font-medium transition duration-300 whitespace-nowrap cursor-pointer ${
                  activeTab === tabId
                    ? "bg-yellow-500 text-white shadow-md"
                    : "hover:bg-yellow-500"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredItems.map((item) => (
            <div
              key={`${item.categoryTitle}-${item.id}`}
              className="bg-white rounded-lg p-6 shadow-sm  flex gap-4"
              data-aos="fade-up"
            >
              {/* Item Image */}
              <div className="flex-shrink-0">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-lg"
                />
              </div>

              {/* Item Details */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-md md:text-lg font-bold text-yellow-500 labster">
                    {item.name}
                  </h3>
                  <p className="text-sm md:text-sm text-gray-600 mt-1 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
                <div className="flex justify-between items-center mt-3">
                  <span className="text-red-500 font-bold text-lg md:text-xl">
                    ${item.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No items found in this category</p>
          </div>
        )}

      </div>
    </section>
  );
}

