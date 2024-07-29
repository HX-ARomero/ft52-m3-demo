import {
	EntitySubscriberInterface,
	EventSubscriber,
	InsertEvent,
} from "typeorm";
import { Platform } from "../entities/PlatformEntity";

@EventSubscriber()
export class PlatformSubscriber
implements EntitySubscriberInterface<Platform> {
	listenTo() {
		return Platform;
	}
	
	beforeInsert(event: InsertEvent<Platform>) {
		// Convertir el nombre de la plataforma a mayúsculas:
		if (event.entity.name) {
			event.entity.name = event.entity.name.toLowerCase();
		}
		console.log(`BEFORE INSERT: `, event.entity);
	}
	
	afterInsert(event: InsertEvent<Platform>) {
		console.log(`AFTER INSERT: `, event.entity);
	}
}