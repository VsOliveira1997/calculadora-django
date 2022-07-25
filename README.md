# Iniciando o projeto

1 . Clone o repositório

2 . Instale a Vitural Environment, via terminal, com o codigo abaixo
```
pip install virtualenv
```

3 - Crie o ambiente virtual (Vitural Environment):
```
virtualenv venv
```

4 - Agora vamos ativar a venv
```
source venv/bin/activate
```
caso esteja usando Linux/MacOs execute esse command
Line

4.1 - Se for windows
```
venv/Scripts/Activate
```

5 - Agora que a venv já está rodando, bora instalar todas as dependências
```
pip install requirements.txt
```

6 - Agora no terminal rode o servidor local
```
python manage.py runserver
```

Obs: para rodar o runserver tem que estar na 
mesma dependência que o manage.py

