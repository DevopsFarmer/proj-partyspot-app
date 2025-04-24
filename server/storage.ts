import { 
  users, type User, type InsertUser,
  events, type Event, type InsertEvent 
} from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Event methods
  createEvent(event: InsertEvent): Promise<Event>;
  getEvent(id: number): Promise<Event | undefined>;
  getEventsByUserId(userId: number): Promise<Event[]>;
  updateEventStatus(id: number, status: string): Promise<Event | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private events: Map<number, Event>;
  private userIdCounter: number;
  private eventIdCounter: number;

  constructor() {
    this.users = new Map();
    this.events = new Map();
    this.userIdCounter = 1;
    this.eventIdCounter = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userIdCounter++;
    const user: User = { 
      ...insertUser, 
      id,
      createdAt: new Date() 
    };
    this.users.set(id, user);
    return user;
  }

  async createEvent(insertEvent: InsertEvent): Promise<Event> {
    const id = this.eventIdCounter++;
    // Generate a booking reference in format PS-YYMMDD-ID
    const date = new Date();
    const year = date.getFullYear().toString().slice(-2);
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const bookingReference = `PS-${year}${month}${day}-${id.toString().padStart(3, '0')}`;

    const event: Event = {
      ...insertEvent,
      id,
      status: 'pending',
      bookingReference,
      createdAt: new Date()
    };
    this.events.set(id, event);
    return event;
  }

  async getEvent(id: number): Promise<Event | undefined> {
    return this.events.get(id);
  }

  async getEventsByUserId(userId: number): Promise<Event[]> {
    return Array.from(this.events.values()).filter(
      (event) => event.userId === userId,
    );
  }

  async updateEventStatus(id: number, status: string): Promise<Event | undefined> {
    const event = this.events.get(id);
    if (!event) return undefined;
    
    const updatedEvent = { ...event, status };
    this.events.set(id, updatedEvent);
    return updatedEvent;
  }
}

export const storage = new MemStorage();
