
// Global name lists representing diverse cultures and regions
const GLOBAL_NAMES = {
  // African names
  african: {
    first: ['Amara', 'Kwame', 'Zara', 'Kofi', 'Asha', 'Tariq', 'Fatima', 'Malik', 'Safiya', 'Omar', 'Adunni', 'Sekou', 'Mariam', 'Bakari', 'Zubeda'],
    last: ['Osei', 'Nkomo', 'Mwangi', 'Hassan', 'Traore', 'Diouf', 'Kamau', 'Mensah', 'Diallo', 'Musa', 'Keita', 'Banda', 'Kone', 'Toure', 'Okello']
  },
  // Asian names
  asian: {
    first: ['Hiroshi', 'Priya', 'Wei', 'Saki', 'Raj', 'Mei', 'Arjun', 'Yuki', 'Ravi', 'Akiko', 'Dev', 'Min-jun', 'Ananya', 'Takeshi', 'Jin'],
    last: ['Tanaka', 'Sharma', 'Li', 'Park', 'Chen', 'Singh', 'Kim', 'Patel', 'Wang', 'Nakamura', 'Kumar', 'Zhou', 'Yamamoto', 'Gupta', 'Sato']
  },
  // European names
  european: {
    first: ['Elena', 'Lars', 'Sofia', 'Dmitri', 'Isabella', 'Magnus', 'Katarina', 'Nils', 'Francesca', 'Viktor', 'Astrid', 'Giovanni', 'Ingrid', 'Alexei', 'Marta'],
    last: ['Rodriguez', 'Andersson', 'Petrov', 'Mueller', 'Rossi', 'Nielsen', 'Kowalski', 'Larsson', 'Novak', 'Lopez', 'Jansen', 'Schmidt', 'Moreau', 'Silva', 'Hansen']
  },
  // Latin American names
  latinAmerican: {
    first: ['Carlos', 'Valentina', 'Diego', 'Camila', 'Rafael', 'Lucia', 'Santiago', 'Isabella', 'Mateo', 'Sofia', 'Gabriel', 'Maria', 'Sebastian', 'Ana', 'Ricardo'],
    last: ['Gutierrez', 'Hernandez', 'Vargas', 'Castro', 'Morales', 'Ruiz', 'Jimenez', 'Fernandez', 'Mendoza', 'Torres', 'Sanchez', 'Ramirez', 'Alvarez', 'Guerrero', 'Medina']
  },
  // Middle Eastern names
  middleEastern: {
    first: ['Yasmin', 'Omar', 'Layla', 'Hassan', 'Nour', 'Ahmed', 'Rania', 'Khalil', 'Dina', 'Samir', 'Lina', 'Karim', 'Sara', 'Fadi', 'Mona'],
    last: ['Al-Rashid', 'Mansour', 'Khoury', 'Farid', 'Nassar', 'Bishara', 'Saleh', 'Qureshi', 'Habib', 'Zahra', 'Nasser', 'Ayoub', 'Jaber', 'Khalil', 'Maalouf']
  },
  // Oceanian names
  oceanian: {
    first: ['Tane', 'Aroha', 'Kai', 'Mere', 'Wiremu', 'Kiri', 'Rangi', 'Hana', 'Matiu', 'Awhina', 'Tama', 'Raina', 'Piripi', 'Māia', 'Hoani'],
    last: ['Taumalolo', 'Williams', 'Te Whare', 'Parata', 'Ngata', 'Hikaka', 'Turangi', 'Mahuta', 'Ratana', 'Tawhai', 'Hohepa', 'Tamaki', 'Ruru', 'Apiata', 'Pomare']
  }
};

// Department cultural preferences based on leadership
const DEPARTMENT_CULTURAL_PREFERENCES = {
  'product-development': ['asian', 'european', 'latinAmerican'], // Dr. Amara Chen
  'marketing': ['latinAmerican', 'european', 'middleEastern'], // Miguel Santos
  'human-resources': ['asian', 'african', 'european'], // Priya Sharma
  'finance-operations': ['european', 'african', 'asian'], // Theo Williams
  'customer-support': ['asian', 'oceanian', 'european'], // Dr. Yuna Kim
  'innovation-rd': ['african', 'european', 'middleEastern'], // David Okafor
  'sales': ['latinAmerican', 'middleEastern', 'asian'], // Sofia Rodriguez
  'governance-compliance': ['african', 'european', 'asian'], // Marcus Bennett
  'external-relations': ['middleEastern', 'african', 'oceanian'] // Aisha Al-Farsi
};

class GlobalNameAssigner {
  private usedNames = new Set<string>();
  private nameIndex = 0;
  
  private getAllNames() {
    const allNames: Array<{name: string, culture: string}> = [];
    
    Object.entries(GLOBAL_NAMES).forEach(([culture, names]) => {
      names.first.forEach(first => {
        names.last.forEach(last => {
          allNames.push({
            name: `${first} ${last}`,
            culture
          });
        });
      });
    });
    
    return allNames;
  }
  
  private shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }
  
  assignNamesForDepartment(departmentId: string, agentCount: number): string[] {
    const preferences = DEPARTMENT_CULTURAL_PREFERENCES[departmentId] || Object.keys(GLOBAL_NAMES);
    const allNames = this.getAllNames();
    
    // Filter names by cultural preferences, then shuffle
    const preferredNames = allNames.filter(nameObj => 
      preferences.includes(nameObj.culture)
    );
    
    const shuffledNames = this.shuffleArray(preferredNames);
    const assignedNames: string[] = [];
    
    for (let i = 0; i < agentCount; i++) {
      let nameObj = shuffledNames[this.nameIndex % shuffledNames.length];
      let attempts = 0;
      
      // Ensure no duplicates
      while (this.usedNames.has(nameObj.name) && attempts < shuffledNames.length) {
        this.nameIndex++;
        nameObj = shuffledNames[this.nameIndex % shuffledNames.length];
        attempts++;
      }
      
      if (attempts < shuffledNames.length) {
        this.usedNames.add(nameObj.name);
        assignedNames.push(nameObj.name);
      } else {
        // Fallback if we run out of unique names
        assignedNames.push(`Agent ${this.nameIndex + 1000}`);
      }
      
      this.nameIndex++;
    }
    
    return assignedNames;
  }
}

export const createGlobalNameAssigner = () => new GlobalNameAssigner();
