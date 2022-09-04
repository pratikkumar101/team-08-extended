import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Footer from "../components/Footer"
import '../css/Faq.css'
import Marquee from './Marquee';
export default function Faq() {
  return (
    <div>
    <Marquee/>
      <div className="faq">
        <div className="faqHeading">
          <h4>
            Frequently Asked Questions (FAQs)</h4>
        </div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Q.1 What medicines should we keep for general stray dogs issues?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{textAlign: "left"}}>
              Different medicines are:  
               <br /> 1- Basics antibiotics for infections or wounds are Less than 600 mg for dogs up to 6 months and 1000mg for above 6 once a day 
               <br /> 2- Pain killer - for any kind of pain. If the dog has a leg problem like if he hobbles then for that give the dogs painkillers and antibiotics. 
                <br /> 3- Antifungal or anti-protozoal- these medicines are for itching in them. "Neomac tablets" are given once in 3-5 days depending on the condition like excessive itching, and worms. If a dog has hair loss due to itching then give this. Ketoconazole tablets for itching can be given on daily basis like once a day if the dog has itching but not severe. 
                <br /> 4- for fever - for fever u can keep tablets that can be given once or twice depending upon the quantity of salt and age of dog
              <br /> 5- betadine - for cleaning any sort of wound 
              <br /> 6- lorexane- it kills maggots and heal the wound of dogs that are not that major 
              <br /> 7- suspension or tablets for nausea All these are basic medicines that you can keep. can give these medicines alone if the dog is friendly and directly put them in their mouth or crushed tablets or liquids can be given with milk, curd, food or non-veg gravy packets for dogs, eggs or meat. Medicines are given acc to the weight and age of a dog. For the severity of anything, injections are given
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >

            <Typography>Q.2 Questions I should ask my breeder?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{textAlign: "left"}}>
              1. they health test their dogs and register the results on ofa.org. you should be able to find the parents of your puppy on ofa.org. Even better, the parents of your pup on ofa.org should have CHIC Certification. CHIC certification means theyve been screened for every disease recommended by the parent club for that breed and those results are publicly available in the database.
              <br /> 2. they dont ship their puppies alone. they want you to come in person to meet you.
              <br /> 3. they dont readily have puppies available that you can instantaneously buy. reputable breeders tend to only have a few litters a year and usually have waitlists
              <br /> 4. often they have a puppy questionnaire or want to know more about YOU
              <br /> 5. they welcome visits and are happy to any answers questions - even long after you buy the pup.
              <br /> 6. they have health guarantees and will make you give the dog back to them if you can no longer take care of it.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >

            <Typography>Q.3 Is feeding Parle G to street dogs good for their health?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{textAlign: "left"}} >
              You can try the slow introduction method: <br />
              <br /> 1. Week 1: Mix 75% parleG and 25% dog biscuits <br /> 2. Week 2: Make it 50-50 3. Week 3: make it 75-25 4. Week 4: Dog bisuits only
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >

            <Typography>Q.4 What should feed to stray dogs and cats?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{textAlign: "left"}}>
              Dog food for dogs and cat food for cats. Cats are what are called obligate carnivores, so they need to eat not just meat, but also the organs and bones from what they kill. Technically they aren't really designed to drink water because their bodies are so water efficient, the blood of their prey is supposed to be enough. Dogs are a bit more like humans with their diet and can process veg, but they still have some other needs that dog specific food fills. Really though, you shouldn't feed them unless you plan to take them in. They are stray and are basically wild. Feeding them regularly tends to dull their hunting ability and will actually hurt them in the long run.
            </Typography>
          </AccordionDetails>
        </Accordion>


        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >

            <Typography>Q.5 How to handle bad moods of street animals?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{textAlign: "left"}}>
              firstly observe them carefully and dont try to step towards them as they can harm you.
              try to remove its source of stress and fear or arosal;
              if aggresion becomes a regular behaviour seek professional help immediately;
              dog aggression warning sign:
              <br />1.  yawning or licking lips
              <br /> 2. crounching with their tail between their legs
              <br /> 3. a wagging tail doesn't always indicate a happy dog so be careful
              <br /> 4. growling is often a  last warning
            </Typography>
          </AccordionDetails>
        </Accordion>


        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >

            <Typography>Q.6 what shouldn't we feed the dog?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{textAlign: "left"}}>
              Candy, gum, toothpaste, baked goods, and some diet foods are sweetened with xylitol.
              It can cause your dog's blood sugar to drop and can also cause liver failure. Early symptoms include vomiting, lethargy, and coordination problems.
            </Typography>
          </AccordionDetails>
        </Accordion>

      </div>
      <Footer/>
    </div>
  );
}