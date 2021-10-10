**Užduotis :**
Panaudodami TypeScript parašykite programą viešbučių tinklui.
Sukurkite viešbutį ir jam pridėkite bent du paprastus kambarius ir vieną baseiną.
Atspausdinkite visus viešbučio duomenis (panaudodami viešbučio _printData()_ metodą) ir paskui dar kartąatspausdinkite viešbbučio duomenis,
tik šį kartą į _printData()_ metodo parametrąonlyComfort nurodykite true.

**Klasė Hotel**

- _Atributai_: name (string) -viešbučio pavadinimas, priskiriamas sukuriant objektą.address (string) -viešbučio adresas, priskiriamas sukuriant objektą.stars (number) -viešbučio žvaigždučiųskaičius, priskiriamas sukuriant objektą.rooms (Room tipo elementųmasyvas) -masyvas, kuris saugo viešbutyje esančias patalpas. Sukuriant objektąyra tuščias.

- _Metodai_: addRoom(room: Room) -metodas, kuris leidžia pridėti prie viešbučio patalpą.printRooms(minComfort?: number) (void) -privatus metodas, kuris atspausdina (panaudojant patalpos _printData()_ metodą) visas viešbutyje esančias patalpas. MinComfort parametras nebūtinas perduoti, bet jei jis perduodamas, atspausdinamos tik tos patalpos, kuriųkomforto sąntykis yra didesnis už minComfort.
  _printData_(onlyComfort ?: boolean) (void) -public metodas, kurio pagalba atspausdinami visi viešbučio duomenys, įskaitant ir patalpas. OnlyComfort parametras nėra būtinas, bet jei jis nurodomas spausdinamos patalpos, kuriųkomforto santykis yra didesnis už 15.

**Klasė Room**

- _Atributai_: size (number) -kambario dydis, priskiriamas sukuriant objektą.capacity (number) -galimas žmoniųkiekistelpantis patalpoje, priskiriamas sukuriant objektą.
- _Metodai_: comfort() (number) -metodas, kuris grąžina komforto santykį, kiek patalpoje vienam žmogui tenka erdvės. T.y. size/capacity.printData() (void) -public metodas, kurio pagalba atspausdinami visi patalpos duomenys (size, capacity, comfort).

**Klasė Spa**

Ši klasė paveldi klasę Room, tačiau turi papildomų -atributų:

_PoolSize_ (number) -nurodo baseino dydį, priskiriamas sukuriant objektą.pool

_Temperature_ (number) -nurodo baseino vandens šilumą, priskiriamas sukuriant objektą.

- _Metodai_: comfort (number) -kaip ir tėvinės klasės (superklasės) identiškas metodas grąžina komforto santykį, kiek patalpoje vienam žmogui tenka erdvės.
  Tik skaičiuojamas pagal formulę(size -poolSize) / capacity.printData (void) atspausdina visus patalpos duomenis panaudodamas superklasės metodątuo pačiu pavadinimu ir papildomai atspausdina baseino dydįir vandens temperatūrą.
