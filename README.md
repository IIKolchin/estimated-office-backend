
## Описание  

Бэкенд для estimated-office

Для проверки приложения необходимо:  
1. Установить и запустить Postgres.  
2. Создать пользователя.  
3. Выдать ему доступ к базе данных.  

После установки и запуска службы PostgreSQL, необходимо создать пользователя, для  
 этого в терминале необходимо выполнить команду:
- для Windows — `psql -U postgres`  
- для macOS — `psql -u $USER -d postgres`  
- для Linux — `sudo -u postgres psql postgres`  

Далее в консоле:  
`CREATE USER iik WITH PASSWORD 'iik';`  
Создаем базу данных:  
`CREATE DATABASE estimated_office;`  
Выдаем пользователю необходимые права:  
`GRANT ALL PRIVILEGES ON DATABASE estimated_office TO iik;`


## Установка

Склонируйте репозиторий и в папке проекта  
```bash
$ npm i && npm run start
```

