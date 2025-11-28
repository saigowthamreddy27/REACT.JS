import { EXAMPLES } from "../data";
import TabButton from "./TabButton/TabButton.jsx";
import { useState } from "react";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(`You clicked the ${selectedButton} button`);
  }
  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          isSelected={selectedTopic === "components"}
          onSelect={() => handleClick("components")}
          label="Components"
        />
        <TabButton
          isSelected={selectedTopic === "jsx"}
          onSelect={() => handleClick("jsx")}
          label="JSX"
        />
        <TabButton
          isSelected={selectedTopic === "props"}
          onSelect={() => handleClick("props")}
          label="Props"
        />
        <TabButton
          isSelected={selectedTopic === "state"}
          onSelect={() => handleClick("state")}
          label="State"
        />
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
  );
}
