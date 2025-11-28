import { CORE_CONCEPTS } from "../data"
import CoreConcept from "./CoreConcept/CoreConcept.jsx";
export default function CoreConcepts(){return(<section id="core-concepts">
          <ul>
           {CORE_CONCEPTS.map((conceptIteam) =><CoreConcept key={conceptIteam.title} {...conceptIteam}/>)} 
            {/* <CoreConcepts
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} /> */} 
          </ul>
        </section>)}