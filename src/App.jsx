import './App.css'
import omelette from "./assets/images/image-omelette.jpeg"
function App() {
  return (
    <div className="bg-[#F3E5D8] font-[Outfit]">
      <div className="flex justify-center items-center p-5">
        <div className=" bg-white w-6/12 rounded-3xl p-[2.5rem] my-[4rem] mx-[5rem]">
          <div className="flex justify-center w-full ">
            <img src={omelette} alt="" className="rounded-xl font-normal" />
          </div>

          <h1 className="font-[YoungSerif] text-4xl my-5 font-normal ">Simple Omelette Recipe</h1>
          <section className="my-5">
            <p>An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked
              to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
          </section>

          <div className="bg-[#FFF5FA] font-[Outfit] flex flex-col p-3 rounded-2xl my-5">
            <h1 className="text-[#7B284F] text-lg font-semibold">Preparation time</h1>
            <ul className="ml-10 text-amber-950" style={{ listStyleType: 'disc', listStylePosition: "inside" }}>
              <li><span className="font-bold">Total:</span> Approximately 10 minutes</li>
              <li><span className="font-bold">Preparation:</span> 5 minutes</li>
              <li><span className="font-bold">Cooking: </span>5 minutes</li>
            </ul>
          </div>
          <h1 className="text-browntext font-[YoungSerif] text-2xl font-normal">
            Ingredients
          </h1>

          <div className="border-b-2 my-5 pb-5 text-browntext ml-2">
            <ul style={{ listStyleType: 'square', listStylePosition: "inside" }}>
              <li>2-3 large eggs</li>
              <li>Salt, to taste</li>
              <li>Pepper, to taste</li>
              <li>1 tablespoon of butter or oil</li>
              <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
            </ul>
          </div>

          <h1 className="text-browntext font-[YoungSerif] text-2xl my-5 font-normal">
            Instructions
          </h1>

          <ol class="ulnumber" style={{ listStyleType: 'decimal', listStylePosition: "inside" }} >
            <li><span>Beat the eggs:</span> In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed.
              You can add a tablespoon of water or milk for a fluffier texture.</li>
            <li ><span>Heat the pan:</span> Place a non-stick frying pan over medium heat and add butter or oil.</li>
            <li ><span>Cook the omelette:</span> Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure
              the eggs evenly coat the surface.</li>
            <li ><span>Add fillings (optional):</span> When the eggs begin to set at the edges but are still slightly runny in the
              middle, sprinkle your chosen fillings over one half of the omelette.</li>
            <li ><span>Fold and serve:</span> As the omelette continues to cook, carefully lift one edge and fold it over the
              fillings. Let it cook for another minute, then slide it onto a plate.</li>
            <li ><span>Enjoy:</span> Serve hot, with additional salt and pepper if needed.</li>
          </ol>

          <h1 className="text-browntext font-[YoungSerif] text-2xl my-5 font-normal">
            Nutrition
          </h1>

          <span className="my-5" style={{ color: "hsl(30, 10%, 34%)" }}>The table below shows nutritional values per serving without the additional fillings.</span>
          <table className="table-auto w-full border-collapse">
            <tbody>
              <tr className="grid grid-cols-2 border-b-2">
                <td className=" p-2">Calories</td>
                <td className=" p-2">277kcal</td>
              </tr>
              <tr className="grid grid-cols-2 border-b-2">
                <td className=" p-2">Carbs</td>
                <td className=" p-2">0g</td>
              </tr>
              <tr className="grid grid-cols-2 border-b-2">
                <td className=" p-2">Protein</td>
                <td className="p-2">20g</td>
              </tr>
              <tr className="grid grid-cols-2 border-b-2">
                <td className=" p-2">Fat</td>
                <td className=" p-2">22g</td>
              </tr>
            </tbody>
          </table>


          <div class="attribution">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
            Coded by <a href="#">TuiTenThai</a>.
          </div>
        </div>
      </div>

    </div>

  );
}

export default App;
