import { CORE_CONCEPTS } from "./data.js";
import Header from "./Components/Header/Header.jsx";
import CoreConcepts from "./Components/CoreConcept/CoreConcepts.jsx";
import TabButton from "./Components/TabButton/TabButton.jsx";
import { useState } from "react";
import { EXAMPLES } from "./data.js";
function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(`You clicked the ${selectedButton} button`);
    console.log("hello")
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <ul>
           {CORE_CONCEPTS.map((conceptIteam) =><CoreConcepts key={conceptIteam.title} {...conceptIteam}/>)} 
            {/* <CoreConcepts
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} /> */}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic==="components"} onSelect={() => handleClick("components")}
              label="Components"
            />
            <TabButton isSelected={selectedTopic==="jsx"} onSelect={() => handleClick("jsx")} label="JSX" />
            <TabButton isSelected={selectedTopic==="props"} onSelect={() => handleClick("props")} label="Props" />
            <TabButton isSelected={selectedTopic==="state"} onSelect={() => handleClick("state")} label="State" />
          </menu>
          {!selectedTopic && <p>please select a topic</p>}
          {selectedTopic && (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
  
}


export default App;
