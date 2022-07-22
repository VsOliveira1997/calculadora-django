# Iniciando o projeto

1 . Primeiro clone o repositório

2 . Instale a Vitural Environment, via terminal

```
pip install virtualenv
```

Após esse código rode:

```
virtualenv venv
```

Agora vamos ativar a venv

caso esteja usando Linux/MacOs execute esse command
Line
```
source venv/bin/activate
```

Se for windows
```
venv/Scripts/Activate
```
Agora que a venv já está rodando, bora instalar
todas as dependências

```
pip install requirements.txt
```

Agora no terminal rode o servidor local
```
python manage.py runserver
```
Obs: para rodar o runserver tem que estar na 
mesma dependência que o manage.py

