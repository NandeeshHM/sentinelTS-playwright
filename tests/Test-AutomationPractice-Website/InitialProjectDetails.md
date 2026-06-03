Test Automation Practice - Gold Mine - High Priority
URL : https://testautomationpractice.blogspot.com/



Automate:-

Nandeesh, this website is actually a gold mine for automation framework development because it contains many UI components in one place. You can easily create 40–50 automation scenarios from it.

1. Form Automation

Automate:

Text fields (Name, Email, Phone)
Text area (Address)
Radio buttons (Gender)
Checkboxes (Days)
Country dropdown
Multiple selection dropdown
Form validation scenarios

Example:

Verify user can enter all details
Verify mandatory fields
Verify invalid email format handling

2. Date Picker Automation

Good Playwright interview topic.

Automate:

Select specific date
Select future date
Select date range
Verify selected value

3. File Upload

Automate:

Single file upload
Multiple file upload
Verify uploaded filename

Playwright handles this very elegantly.

4. Web Table Automation
Static Table

Automate:

Get row count
Get column count
Find author name
Calculate total prices
Search specific row
Dynamic Table

Automate:

Read CPU value of Chrome
Read memory value of Firefox
Validate dynamic values

These are common interview questions.

5. Pagination Table

Automate:

Select all checkboxes across pages
Verify row count
Verify selected items
Navigate page 1 → page 4

This is a very strong framework scenario.

6. Alerts & Popups

Automate:

Simple Alert
Confirmation Alert
Prompt Alert

Validate:

Alert text
Accept/Dismiss
Enter text in prompt

7. Browser Tabs & Windows

Automate:

Open new tab
Switch tab
Validate URL
Close child tab
Return to parent

Very common in real projects.

8. Mouse Actions

Automate:

Hover menu
Click submenu
Verify visibility

Use Playwright hover functionality.

9. Double Click

Automate:

Enter text in Field1
Double click button
Verify copied value in Field2

10. Drag and Drop

Automate:

Drag source
Drop target
Verify successful drop

Good advanced Playwright scenario.

11. Slider

Automate:

Move slider
Verify value changes

12. SVG Elements

Automate:

Locate SVG
Click SVG nodes

Very useful because many beginners struggle with SVG locators.

13. Auto Suggestion / Scrolling Dropdown

Automate:

Search item
Select item
Verify selection

Excellent Playwright practice.

14. Labels & Links

Automate:

Verify label text
Validate hyperlinks
Verify navigation

15. Broken Link Validation

The site includes links that intentionally return 400, 401, 403, 404, 500, etc. You can build API-based link validation tests.

If this were my GitHub portfolio

I would create separate test suites:

tests/
├── forms/
├── tables/
├── alerts/
├── windows/
├── mouse-actions/
├── upload/
├── datepicker/
├── dragdrop/
├── links/
└── api/

And demonstrate:

Page Object Model
Data-driven testing
Playwright fixtures
Custom reporters
Screenshots on failure
Retry mechanism
Parallel execution
GitHub Actions CI/CD

That would look much stronger in interviews than simply automating a shopping or postal website because it showcases a wider range of automation skills from a single application.