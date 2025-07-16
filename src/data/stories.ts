// Import all story images
import story1Image from '@/assets/story1-squirrel.jpg';
import story2Image from '@/assets/story2-fox.jpg';
import story3Image from '@/assets/story3-bunny.jpg';
import story4Image from '@/assets/story4-elephant.jpg';
import story5Image from '@/assets/story5-turtle.jpg';
import story6Image from '@/assets/story6-hedgehog.jpg';
import story7Image from '@/assets/story7-duckling.jpg';
import story8Image from '@/assets/story8-bear.jpg';
import story9Image from '@/assets/story9-ant.jpg';
import story10Image from '@/assets/story10-friendship.jpg';

export interface Story {
  id: number;
  title: string;
  moral: string;
  image: string;
  content: string;
  summary: string;
}

export const stories: Story[] = [
  {
    id: 1,
    title: "The Sharing Squirrel",
    moral: "Sharing makes everyone happy",
    image: story1Image,
    summary: "Sally Squirrel learns that sharing her acorns brings joy to all her friends.",
    content: `Once upon a time, in a beautiful oak forest, lived a little squirrel named Sally. Sally had worked very hard all summer collecting acorns for winter.

One chilly autumn day, Sally's friends came to visit. Benny the rabbit had run out of carrots, and Chirpy the bird couldn't find any seeds. They looked so hungry and sad.

At first, Sally thought, "I need all my acorns for winter!" But then she saw her friends shivering and looking worried. Her heart felt warm when she remembered how much fun they had together in summer.

"Friends," said Sally with a big smile, "let's share my acorns! We can all have a wonderful winter together!"

They shared the acorns and spent the whole winter telling stories, playing games, and staying warm together. Sally discovered that sharing her acorns made her feel much happier than keeping them all to herself.

When spring came, all her friends helped Sally collect even more acorns than before!`
  },
  {
    id: 2,
    title: "The Honest Little Fox",
    moral: "Honesty is always the best choice",
    image: story2Image,
    summary: "Finn the fox finds a golden coin and learns that being honest feels better than lying.",
    content: `In a peaceful meadow lived a clever young fox named Finn. Finn was known for being very smart, but sometimes he would stretch the truth when it suited him.

One sunny morning, while playing near the old oak tree, Finn found a shiny golden coin half-buried in the dirt. It was the most beautiful thing he had ever seen!

Just then, old Mr. Rabbit came hopping by, looking very worried. "Oh dear," sighed Mr. Rabbit, "I've lost my special golden coin somewhere in this meadow. It was a gift from my grandmother."

Finn's heart started beating fast. He could keep the coin and no one would ever know. But as he looked at Mr. Rabbit's sad face, something inside him felt uncomfortable.

"Mr. Rabbit," said Finn, pulling the golden coin from his fur, "is this what you're looking for?"

Mr. Rabbit's eyes lit up with joy! "Oh, thank you, Finn! You're so honest and kind!" He was so grateful that he invited Finn to his house for the most delicious carrot cake.

From that day on, Finn always chose to tell the truth. He discovered that being honest made him feel proud and brought him wonderful friendships.`
  },
  {
    id: 3,
    title: "The Brave Bunny",
    moral: "Being brave means standing up for others",
    image: story3Image,
    summary: "Little Pip shows that even the smallest bunny can be brave when helping others.",
    content: `In a colorful flower meadow lived a very small bunny named Pip. Pip was the tiniest bunny in the whole meadow, and sometimes she felt too small to help anyone.

One afternoon, while hopping through the daisies, Pip heard a tiny squeak for help. Behind a big sunflower, she found Squeaky the field mouse trembling with fear. A much larger animal was approaching!

"Please help me," whispered Squeaky. "I'm too scared to run!"

Even though Pip was small and her heart was beating fast, she knew she had to help her friend. When Buster the big (but actually gentle) bear came lumbering through the flowers, Pip hopped right in front of him.

"Stop!" called Pip in her bravest voice, even though her paws were shaking. "You're scaring my friend Squeaky!"

Buster stopped and looked down at the tiny bunny. "Oh my!" he said gently. "I'm so sorry! I was just looking for honey and didn't see little Squeaky. I would never hurt anyone."

Pip realized that sometimes being brave doesn't mean you're not scared - it means you do the right thing even when you are scared.

From that day on, whenever someone needed help in the meadow, they knew they could count on Pip, the bravest little bunny of all!`
  },
  {
    id: 4,
    title: "The Kind Elephant",
    moral: "Kindness makes the world a better place",
    image: story4Image,
    summary: "Ellie the elephant shows how one act of kindness can make a big difference.",
    content: `In the heart of the African savanna lived a gentle elephant named Ellie. Ellie had a very special trunk that could reach the highest branches of the acacia trees.

One hot summer day, the watering hole was getting smaller, and all the animals were thirsty and tired. Little Miko the monkey sat sadly under a tree, looking up at the juicy fruits that were too high for him to reach.

"I'm so hungry," sighed Miko. "But these fruits are way too high, and I'm too tired to climb today."

Ellie heard Miko's sad voice and walked over with a warm smile. Without being asked, she gently wrapped her trunk around the highest branch and shook it carefully. The most delicious fruits fell down right next to Miko!

"Oh, thank you, Ellie!" said Miko happily. "You're so kind!"

But Ellie wasn't finished. She used her trunk to pick more fruits from different trees and shared them with all the other animals who were too tired or too small to get their own food.

Soon, all the animals in the savanna were talking about Ellie's kindness. They started helping each other too - the giraffes shared leaves, the zebras shared the best grass, and the lions shared the shadiest spots.

Ellie learned that one small act of kindness can spread like ripples in water, making everyone's world a little brighter and happier.`
  },
  {
    id: 5,
    title: "The Patient Turtle",
    moral: "Patience and persistence lead to success",
    image: story5Image,
    summary: "Toby the turtle teaches us that slow and steady really does win the race.",
    content: `On the edge of a peaceful pond lived an old wise turtle named Toby. Toby was known throughout the forest for being very slow, but also very wise.

One spring morning, Zippy the hare came bouncing by. "Hey Toby!" called Zippy. "Want to race to the big oak tree? I bet I can get there in two minutes!"

All the other animals gathered around. They whispered, "Poor Toby doesn't have a chance against speedy Zippy!"

But Toby just smiled peacefully. "I'd love to race, Zippy. Let's see what happens when we both do our best."

When the race began, Zippy zoomed ahead so fast he was just a blur! Toby started walking at his usual slow, steady pace. Step by step, breath by breath, he kept moving forward.

Zippy was so far ahead that he decided to take a nap under a shady tree. "I have plenty of time," he yawned.

Meanwhile, Toby kept walking. He didn't stop to rest. He didn't give up. He just kept putting one foot in front of the other, enjoying the beautiful flowers and singing birds along the way.

When Zippy woke up, he saw Toby slowly crossing the finish line! All the animals cheered for Toby's patience and determination.

"You taught me something important today," said Zippy, giving Toby a respectful bow. "Being fast isn't everything. Being patient and never giving up is what really counts!"`
  },
  {
    id: 6,
    title: "The Helpful Hedgehog",
    moral: "Helping others brings joy to everyone",
    image: story6Image,
    summary: "Holly the hedgehog discovers that helping others is the most rewarding thing of all.",
    content: `In a lovely garden filled with roses and daisies lived a small hedgehog named Holly. Holly had soft brown spines and the kindest heart in the whole garden.

One morning, Holly heard a sad peeping sound coming from near the fountain. She found a tiny baby bird sitting on the ground, looking lost and frightened.

"Oh dear," chirped the little bird. "I fell from my nest and can't find my way home! I'm so scared and don't know what to do."

Holly's heart filled with care for the little bird. "Don't worry," she said gently. "I'll help you find your family!"

Holly looked up at all the tall trees around the garden. There were so many nests! How would she ever find the right one? But Holly didn't give up.

She carefully helped the baby bird onto her back and slowly walked to each tree. At every tree, she called up sweetly, "Hello! Are you missing a little one?"

Finally, at the seventh tree, they heard a joyful response! "My baby! My baby!" called Mama Bird from high above.

Holly helped the little bird climb up to a low branch where Papa Bird could reach down and carry him the rest of the way home.

"Thank you, Holly!" called the whole bird family. "You're our hero!"

That evening, Holly felt warm and happy inside. She had discovered that helping others didn't just make them happy - it made her feel wonderful too! From that day on, Holly became known as the most helpful hedgehog in the garden.`
  },
  {
    id: 7,
    title: "The Grateful Duckling",
    moral: "Gratitude makes life more beautiful",
    image: story7Image,
    summary: "Daisy the duckling learns to appreciate all the good things in her life.",
    content: `By a sparkling blue pond lived a little duckling named Daisy. Daisy had the most beautiful yellow feathers, but she often forgot to notice all the wonderful things around her.

One rainy day, Daisy was caught in a terrible storm. The wind was howling, and she couldn't find her way back to the pond. She was cold, wet, and very scared.

Just when Daisy thought she might be lost forever, kind Farmer Joe found her shivering under a big leaf. "Oh, you poor little duckling!" he said gently, scooping her up in his warm hands.

Farmer Joe took Daisy to his cozy barn, dried her off with a soft towel, and gave her some warm grain to eat. He made sure she was safe and comfortable until the storm passed.

The next morning was bright and sunny. Farmer Joe walked Daisy back to her pond, where her family was waiting anxiously.

"Daisy!" quacked her mama. "We were so worried about you!"

As Daisy looked around at her beautiful pond, her loving family, the warm sunshine, and thought about Farmer Joe's kindness, her heart felt full of happiness.

"I have so many wonderful things in my life," realized Daisy. "My family loves me, I have a beautiful home, kind friends, and there are good people like Farmer Joe who help when I need it."

From that day on, Daisy made sure to say "thank you" for something good every single day. She thanked the sun for its warmth, her family for their love, and her friends for their laughter. She discovered that being grateful made every day feel like a gift!`
  },
  {
    id: 8,
    title: "The Forgiving Bear",
    moral: "Forgiveness heals hearts and strengthens friendships",
    image: story8Image,
    summary: "Bruno the bear learns that forgiving others makes everyone feel better.",
    content: `Deep in a peaceful forest lived a big, gentle bear named Bruno. Bruno loved two things most of all: his friends and his delicious honey that he collected from the bees.

Bruno had worked all summer to fill a big pot with the sweetest, most golden honey you could imagine. He was saving it for a special winter treat to share with all his forest friends.

One day, while Bruno was taking a nap, his friend Rascal the raccoon came by to visit. Rascal was always curious about everything, and when he saw the honey pot, he just had to take a closer look.

Rascal climbed up to peek inside, but - CRASH! - he accidentally knocked the whole pot over! All of Bruno's precious honey spilled out onto the forest floor.

When Bruno woke up and saw his honey everywhere, he felt very sad and a little angry. Rascal was crying and apologizing over and over again.

"I'm so sorry, Bruno! I didn't mean to! I was just curious! Please don't hate me!"

Bruno looked at his spilled honey, then at his friend's tears. In his heart, Bruno knew that Rascal hadn't meant to cause trouble. Rascal was just being his naturally curious self.

"Rascal," said Bruno with a warm hug, "I forgive you. Accidents happen, and our friendship is much more important than honey."

Rascal was so touched by Bruno's forgiveness that he spent the next week helping Bruno collect even more honey than before! Their friendship became stronger than ever.

Bruno learned that forgiving others doesn't just make them feel better - it makes your own heart feel lighter and happier too.`
  },
  {
    id: 9,
    title: "The Hardworking Ant",
    moral: "Hard work and teamwork achieve great things",
    image: story9Image,
    summary: "Andy the ant shows that with determination and friends, any goal is possible.",
    content: `In a busy garden lived a determined little ant named Andy. Andy had a big dream - he wanted to build the most amazing anthill that any ant had ever seen!

Every morning, Andy would wake up early and start working. He would carry tiny grains of sand, small pebbles, and bits of leaves to build his anthill. The work was hard, and progress seemed very slow.

Some of the other insects would laugh as they flew by. "Look at Andy," buzzed the lazy grasshopper. "Working so hard on such a tiny hill! Why doesn't he just relax and play like the rest of us?"

But Andy didn't give up. Day after day, grain by grain, his anthill grew a little bit bigger. Even when it rained and washed some of his work away, Andy would start again the next day with a cheerful attitude.

One day, Andy's friend Bella the ant came by and saw how hard he was working. "Andy, this looks like a wonderful project! Can I help?"

Soon, more and more ants joined in. They worked as a team, each one carrying what they could, sharing ideas, and encouraging each other. What had seemed impossible for one ant became possible with many ants working together.

By the end of summer, they had built the most magnificent anthill the garden had ever seen! It had tunnels, rooms, storage areas, and even a beautiful garden on top.

"We did it!" cheered Andy. "But we couldn't have done it without working hard every day and helping each other!"

All the insects who had laughed before now came to admire the amazing anthill. Andy learned that with hard work, patience, and good friends, even the biggest dreams can come true.`
  },
  {
    id: 10,
    title: "The Friendship Forest",
    moral: "True friendship brings magic to life",
    image: story10Image,
    summary: "All the forest animals discover that friendship is the greatest treasure of all.",
    content: `In a magical forest where the trees sparkled with golden leaves, all the animals lived together happily. There was Ruby the rabbit, Felix the fox, Bruno the bear, Oliver the owl, and Grace the deer.

But one day, a terrible storm came through the forest. The wind was so strong that it knocked down trees and scattered all the animals' homes. When the storm was over, everyone felt sad and lonely.

Ruby's burrow was flooded. Felix's den was blocked by fallen branches. Bruno's cave had rocks covering the entrance. Oliver's tree house was blown away, and Grace's meadow was covered with debris.

Each animal sat alone, feeling sorry for themselves. "I'll never have a nice home again," sighed Ruby. "Everything is ruined," worried Felix.

But then Oliver the wise owl had an idea. "Friends," he called out, "what if we all work together? We could build one big, beautiful home where we can all live together!"

At first, everyone thought this was impossible. How could such different animals live in the same place? But they decided to try.

Ruby was great at digging tunnels. Felix was excellent at finding the perfect building materials. Bruno was strong enough to move heavy rocks. Oliver could see the best spots from high up, and Grace knew where to find the softest moss and prettiest flowers.

Working together, they built the most wonderful home the forest had ever seen! It had cozy underground rooms for Ruby, a perfect den area for Felix, a strong cave section for Bruno, high perches for Oliver, and beautiful garden spaces for Grace.

But the most magical thing happened when they all moved in together. Their home was filled with laughter, stories, songs, and love. They realized that having friends to share everything with made every day an adventure.

From that day on, their forest home became known as the Friendship Forest, where visitors from far and wide came to see how magical life could be when friends care for each other.

"We have the greatest treasure in the world," they all agreed. "We have each other!"`
  }
];