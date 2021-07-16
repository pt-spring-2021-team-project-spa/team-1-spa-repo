package org.wecancodeit.mysteryeducator;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.wecancodeit.mysteryeducator.models.Animal;
import org.wecancodeit.mysteryeducator.models.Classification;
import org.wecancodeit.mysteryeducator.models.Continent;
import org.wecancodeit.mysteryeducator.repos.AnimalRepository;
import org.wecancodeit.mysteryeducator.repos.ClassificationRepository;
import org.wecancodeit.mysteryeducator.repos.ContinentRepository;

import javax.annotation.Resource;

@Component
public class Populator implements CommandLineRunner {

    @Resource
    private AnimalRepository animalRepo;

    @Resource
    private ClassificationRepository classificationRepo;

    @Resource
    private ContinentRepository continentRepo;

    @Override
    public void run(String... args) throws Exception{

        Continent northAmerica = new Continent("North America");
        Continent southAmerica = new Continent("South America");
        Continent asia = new Continent("Asia");
        Continent africa = new Continent("Africa");
        Continent antarctica = new Continent("Antarctica");
        Continent australia = new Continent("Australia");
        Continent europe = new Continent("Europe");

        continentRepo.save(northAmerica);
        continentRepo.save(southAmerica);
        continentRepo.save(asia);
        continentRepo.save(africa);
        continentRepo.save(antarctica);
        continentRepo.save(australia);
        continentRepo.save(europe);

        Classification mammal = new Classification("Mammal");
        Classification bird = new Classification("Bird");
        Classification reptile = new Classification("Reptile");
        Classification amphibian = new Classification("Amphibian");
        Classification fish = new Classification("Fish");

        classificationRepo.save(mammal);
        classificationRepo.save(bird);
        classificationRepo.save(reptile);
        classificationRepo.save(amphibian);
        classificationRepo.save(fish);

        Animal dodo = new Animal("Dodo","An extinct flightless bird that inhabited Mauritius, the Dodo was about one metre tall and may have weighed 10–18 kg. The only account we have of the Dodo’s appearance is through varied illustrations and written accounts from the 17th century so its exact appearance remains unresolved. It is presumed the bird became flightless due to the availability of abundant food sources (seeds, roots and fallen fruits) and a relative absence of predators. Dutch sailors first recorded a mention of the dodo in 1598. The bird was hunted to extinction by sailors and their domesticated animals, and invasive species. The last widely accepted sighting of a Dodo was in 1662.", "1662", ".../client-side/images/DodoBird.jpg ", africa , bird);
        Animal tasmanianTiger = new Animal("Tasmanian Tiger", "Native to Australia, Tasmania and New Guinea, the Tasmanian Tiger was a large carnivorous marsupial.  Not related to tigers, the creature had the appearance of a medium-to-large-size dog (it weighed 30kg with a nose to tail length of almost 2 metres) but dark stripes gave it a tiger-like appearance. It is believed to have been hunted to extinction – this was encouraged by bounties – but human encroachment into its habitat, the introduction of dogs and disease could also have contributed. The last wild Tasmanian Tiger was killed between 1910 and 1920, with the last captive one dying in Hobart Zoo, Tasmania in 1936.", "1936", ".../client-side/images/TasmanianTiger.jpg ", australia, mammal);
        Animal westAfricanBlackRhino = new Animal("West African Black Rhinoceros", "The West African Black Rhinoceros was found in several countries towards the southeast region of Africa. Measuring 3-3.8 metres long and 1.4-1.7 metres in height, this rhino would have weighed 800-1,300 kg. It had two horns, one measuring 0.5-1.3 metres and the other between 2-55cm. Their diet included leafy plants and shoots. Some believe their horns had medicinal properties – though this had no grounding in scientific fact – which lead to heavy poaching. In the 1930’s preservation action was taken to protect the species, but the numbers continued to decline. The last West African Black Rhino was seen in Cameroon in 2006. It was declared officially extinct in 2011.", "2011", ".../client-side/images/BlackRhino.jpg", africa, mammal);
        Animal greatAuk = new Animal("Great Auk", "A large and flightless bird found in the North Atlantic and as far south as Northern Spain. It had an average height of 75-85 cm and weighed about 5kg. The Great Auk was a powerful swimmer which helped it to hunt underwater for food. The last colony of Auks lived on the island of Eldey and by 1835 they had all been killed. The last of these birds was killed by three men who caught it on St Kilda, Scotland in 1844. When a large storm surged, they believed that the auk was a witch and was causing the storm, so they killed it.", "1844", ".../client-side/images/GreatAuk.jpg", europe, bird);
        Animal quagga = new Animal("Quagga", "The odd-looking animal resembled a cross between a stout pony and a zebra. With the zebra’s dazzling stripes across its head, mane, and neck, and the chestnut colouring of a pony or horse throughout the rest of its body. The last animal died in the Amsterdam Zoo in 1883.", "1883", ".../client-side/images/Quagga.jpg ", africa, mammal);
        Animal desertRatKangaroo = new Animal("Desert Rat-Kangaroo", "The Desert Rat-Kangaroo has the dubious distinction of being declared extinct not once, but twice. This bulbous, foot-long marsupial, which indeed looked like a cross between a rat and a kangaroo, was discovered in the early 1840s and memorialized on canvas by the naturalist John Gould. The Desert Rat-Kangaroo then promptly disappeared from view for almost 100 years, only to be rediscovered deep in the central Australian desert in the early 1930s. While diehards hold out hope that this marsupial has somehow escaped oblivion (it was officially declared extinct in 1994), it's more likely that predation by Red Foxes eradicated it from the face of the earth.", "1944", ".../client-side/images/DesertRatKangaroo.jpg ", australia, mammal);

        animalRepo.save(dodo);
        animalRepo.save(tasmanianTiger);
        animalRepo.save(westAfricanBlackRhino);
        animalRepo.save(greatAuk);
        animalRepo.save(quagga);
        animalRepo.save(desertRatKangaroo);

        
    }
}