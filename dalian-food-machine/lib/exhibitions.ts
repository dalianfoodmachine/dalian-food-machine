export type ExhibitionPhoto = {
  image: string;
  caption: [string, string];
};

// Image provenance and date verification: docs/specs/exhibition-records.md.
export const exhibitions = [
  {
    year: "2025",
    name: [
      "台北國際食品加工機械展",
      "Taipei International Food Processing Machinery Show",
    ],
    date: "2025.06.25 — 06.28",
    venue: [
      "南港展覽館 1 館 4 樓・M0633a",
      "Taipei Nangang Exhibition Center, Hall 1, 4F · M0633a",
    ],
    description: [
      "把機器帶到現場，展示包製過程，也讓參觀者看看做出來的成品。",
      "Machines on display, conversations at the booth and freshly formed products for visitors to see.",
    ],
    source: "https://www.foodport.com.tw/2025tifps.html",
    photos: [
      {
        image: "expo_2025_booth",
        caption: [
          "2025 食品機械展・攤位現場與參觀交流",
          "2025 Food Processing Machinery Show · Visitors at our booth",
        ],
      },
      {
        image: "expo_2025_display",
        caption: [
          "2025 食品機械展・大連食品設備展示",
          "2025 Food Processing Machinery Show · Dalian Food Machine display",
        ],
      },
      {
        image: "expo_2025_dumplings",
        caption: [
          "2025 食品機械展・現場製作的水餃成品",
          "2025 Food Processing Machinery Show · Dumplings made at the show",
        ],
      },
    ] satisfies ExhibitionPhoto[],
  },
  {
    year: "2023",
    name: ["台北國際烘焙暨設備展", "Taipei International Bakery Show"],
    date: "2023.02.16 — 02.19",
    venue: ["台北南港展覽館 1 館", "Taipei Nangang Exhibition Center, Hall 1"],
    description: [
      "從放皮、出餡到成型，在攤位前一起看示範，聊聊機器怎麼用。",
      "Watching the wrapping and forming demonstration together, with time to discuss how the equipment works.",
    ],
    source: "https://www.chanchao.com.tw/expoDetail.asp?id=TIBS2023",
    photos: [
      {
        image: "expo_2023_visitors",
        caption: [
          "2023 烘焙展・參觀者聚在大連食品攤位前",
          "2023 Bakery Show · Visitors gathering at the Dalian Food Machine booth",
        ],
      },
      {
        image: "expo_2023_demo",
        caption: [
          "2023 烘焙展・工作人員現場操作示範",
          "2023 Bakery Show · Live machine demonstration",
        ],
      },
      {
        image: "expo_2023_booth",
        caption: [
          "2023 烘焙展・攤位與展示設備",
          "2023 Bakery Show · Our booth and equipment",
        ],
      },
    ] satisfies ExhibitionPhoto[],
  },
];

export const archivePhotos: ExhibitionPhoto[] = [
  {
    image: "expo_archive_demo",
    caption: [
      "往年展場・工作人員介紹機器",
      "Past exhibitions · Introducing our machines",
    ],
  },
  {
    image: "expo_archive_visitors",
    caption: [
      "往年展場・設備展示與參觀交流",
      "Past exhibitions · Equipment displays and conversations",
    ],
  },
];
