### Latihan

Buatlah sebuah class bernama Pokemon, yang memiliki properties sebagai berikut:

1. Pokemons
- id (integer)
- name (varchar 50)
- type (varchar 50)
- owner (varchar 50)

Buatlah express dengan routing sebagai berikut:

- GET, '/', menampilkan homepage
- GET, '/pokemons', menampilkan seluruh pokemon
- GET, '/pokemons/create', menampilkan form untuk create
- POST, '/pokemons/create', membuat pokemon baru
- GET, '/pokemons?type', memfilter pokemon