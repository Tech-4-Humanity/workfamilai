
// Efficient name generator with lazy loading
const GLOBAL_NAMES = {
  african: {
    first: ['Amara', 'Kwame', 'Zara', 'Kofi', 'Asha', 'Tariq', 'Fatima', 'Malik', 'Safiya', 'Omar'],
    last: ['Osei', 'Nkomo', 'Mwangi', 'Hassan', 'Traore', 'Diouf', 'Kamau', 'Mensah', 'Diallo', 'Musa']
  },
  asian: {
    first: ['Hiroshi', 'Priya', 'Wei', 'Saki', 'Raj', 'Mei', 'Arjun', 'Yuki', 'Ravi', 'Akiko'],
    last: ['Tanaka', 'Sharma', 'Li', 'Park', 'Chen', 'Singh', 'Kim', 'Patel', 'Wang', 'Nakamura']
  },
  european: {
    first: ['Elena', 'Lars', 'Sofia', 'Dmitri', 'Isabella', 'Magnus', 'Katarina', 'Nils', 'Francesca', 'Viktor'],
    last: ['Rodriguez', 'Andersson', 'Petrov', 'Mueller', 'Rossi', 'Nielsen', 'Kowalski', 'Larsson', 'Novak', 'Lopez']
  },
  latinAmerican: {
    first: ['Carlos', 'Valentina', 'Diego', 'Camila', 'Rafael', 'Lucia', 'Santiago', 'Isabella', 'Mateo', 'Sofia'],
    last: ['Gutierrez', 'Hernandez', 'Vargas', 'Castro', 'Morales', 'Ruiz', 'Jimenez', 'Fernandez', 'Mendoza', 'Torres']
  },
  middleEastern: {
    first: ['Yasmin', 'Omar', 'Layla', 'Hassan', 'Nour', 'Ahmed', 'Rania', 'Khalil', 'Dina', 'Samir'],
    last: ['Al-Rashid', 'Mansour', 'Khoury', 'Farid', 'Nassar', 'Bishara', 'Saleh', 'Qureshi', 'Habib', 'Zahra']
  },
  oceanian: {
    first: ['Tane', 'Aroha', 'Kai', 'Mere', 'Wiremu', 'Kiri', 'Rangi', 'Hana', 'Matiu', 'Awhina'],
    last: ['Taumalolo', 'Williams', 'Te Whare', 'Parata', 'Ngata', 'Hikaka', 'Turangi', 'Mahuta', 'Ratana', 'Tawhai']
  }
};

const DEPARTMENT_CULTURAL_PREFERENCES: Record<string, string[]> = {
  'product-development': ['asian', 'european', 'latinAmerican'],
  'marketing': ['latinAmerican', 'european', 'middleEastern'],
  'human-resources': ['asian', 'african', 'european'],
  'finance-operations': ['european', 'african', 'asian'],
  'customer-support': ['asian', 'oceanian', 'european'],
  'innovation-rd': ['african', 'european', 'middleEastern'],
  'sales': ['latinAmerican', 'middleEastern', 'asian'],
  'governance-compliance': ['african', 'european', 'asian'],
  'external-relations': ['middleEastern', 'african', 'oceanian']
};

class NameGenerator {
  private cache = new Map<string, string[]>();
  
  generateNamesForDepartment(departmentId: string, count: number): string[] {
    const cacheKey = `${departmentId}-${count}`;
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey)!;
    }

    const preferences = DEPARTMENT_CULTURAL_PREFERENCES[departmentId] || Object.keys(GLOBAL_NAMES);
    const names: string[] = [];
    const usedNames = new Set<string>();
    
    // Create name pool from preferred cultures
    const namePool: Array<{first: string, last: string, culture: string}> = [];
    preferences.forEach(culture => {
      const cultureNames = GLOBAL_NAMES[culture as keyof typeof GLOBAL_NAMES];
      cultureNames.first.forEach(first => {
        cultureNames.last.forEach(last => {
          namePool.push({ first, last, culture });
        });
      });
    });

    // Shuffle the pool for randomness
    for (let i = namePool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [namePool[i], namePool[j]] = [namePool[j], namePool[i]];
    }

    // Generate unique names
    for (let i = 0; i < count && i < namePool.length; i++) {
      const { first, last } = namePool[i];
      const fullName = `${first} ${last}`;
      if (!usedNames.has(fullName)) {
        names.push(fullName);
        usedNames.add(fullName);
      }
    }

    // Fill remaining with numbered agents if needed
    while (names.length < count) {
      names.push(`Agent ${1000 + names.length}`);
    }

    this.cache.set(cacheKey, names);
    return names;
  }
}

export const nameGenerator = new NameGenerator();
