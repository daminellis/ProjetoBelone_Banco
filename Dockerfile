# Use uma imagem base adequada, como Node.js, se for um aplicativo frontend baseado em JavaScript
FROM node:14

# Defina o diretório de trabalho
WORKDIR /app

# Copie os arquivos do projeto para dentro do contêiner
COPY FrontEnd/package.json ./    
COPY FrontEnd/ .                 

# Instale as dependências
RUN npm install

# Exponha a porta correta
EXPOSE 80

# Comando para rodar o frontend
CMD ["npm", "start"]
