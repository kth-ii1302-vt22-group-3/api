db: 
	@echo "Creating database..."
	@docker run -d --rm --volume=$(PWD):/data --workdir=/data \
		-p 5432:5432 \
		-e POSTGRES_USERNAME=postgres \
		-e POSTGRES_PASSWORD=postgres \
		-e POSTGRES_DB=ii1302 \
		--name ii1302_db \
		postgres:13-alpine
	@echo "Database created"

db-stop:
	@echo "Stopping database..."
	@docker container stop ii1302_db
	@echo "Database stopped"

db-shell:
	@echo "Starting shell..."
	@docker exec -it ii1302_db /bin/bash
	@echo "Shell started"
