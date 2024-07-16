interface MenuItem {
  id: number;
  name: string;
  // Add other relevant properties
}

class MenuService {
  apiEndpoint: string;

  constructor(apiEndpoint: string) {
    this.apiEndpoint = apiEndpoint;
  }

  async getSubcategoryMenuitems(): Promise<MenuItem[]> {
    try {
      const response = await fetch(`${this.apiEndpoint}/subcategories`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data: { menuItems: MenuItem[] } = await response.json();
      return data.menuItems; // Assuming the structure of the response
    } catch (error) {
      console.error('Error fetching subcategory menu items:', error);
      throw error; // Rethrow to let the caller handle it
    }
  }
}

// Usage example:
const menuService = new MenuService('https://api.example.com');
menuService.getSubcategoryMenuitems().then(menuItems => {
  console.log(menuItems);
}).catch(error => {
  console.error('Failed to get subcategory menu items', error);
});
