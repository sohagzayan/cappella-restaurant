# Assessment Task

#### 1. A project titled, “Alex’s Kitchen” from team "Remote Kitchen" uses Git for version control. Several developers are contributing, with each working on their own branch. The team follows certain conventions. Suppose you need to submit a hotfix. How would you name your branch? After finalizing your work in your designated branch, detail the steps you would take to create a PR and merge it with the production branch.

### Answer:

For the hotfix branch, I'd name it 'hotfix/issue-description' to indicate it's a quick fix. After finishing my work, I'd create a pull request (PR) on GitHub. In the PR, I'd describe the issue and the fix. I'd assign relevant team members for review. After addressing any feedback, I'd merge the PR into the production branch. Then I'd delete the hotfix branch

#### 2. In a Digital Kitchen, we have an array of Menu collections. Each collection is an object of the Menu. And contains two properties alongside various properties of Menu. Which are, menuItems (which is an array of objects. Each object has a unique identifier) and categories. Categories itself is an array of objects. In each object inside categories, there is one property (an array of int’s) called menu Items Ids. Find out the specific items that belong to each category. Take a reference from below code snippet,

### Answer:

To tackle this task, we need to carefully navigate through each menu collection and its categories. For each category, we'll look at its menu item IDs and match them with the actual menu items.

Example Step...

- Loop through each menu collection: We'll start by going through each menu collection. This allows us to access its categories and menu items.
- For each category: Within each collection, we'll examine each category. This lets us access its menu item IDs.
- Match menu item IDs with actual items: For every menu item ID in a category, we'll find the corresponding menu item in the menu items array.
- Store matched menu items with their categories: We'll organize the matched menu items with their respective categories.

- Repeat for each menu collection: We'll repeat this process for each menu collection.

- Output the results: Finally, we'll display or store the matched menu items with their respective categories.

This method ensures we accurately find the items for each category based on the provided IDs. It's a systematic way to extract the required data from the menu structure.

### Quick View

![alt text](image.png)
