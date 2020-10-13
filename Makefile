PROJECT = "playfair-solver"
all: help

help:
	$(info ***** INSTRUCTIONS *****)
	@echo "To encode text"
	@echo "make run ARGS=\"encode <message> <alphabet>\""
	@echo ""
	@echo "To decode text"
	@echo "make run ARGS=\"decode <encoded message> <alphabet>\""


run:
	npm run start $(ARGS)

.PHONY: run
