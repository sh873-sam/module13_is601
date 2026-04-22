import pytest
from playwright.sync_api import sync_playwright

BASE_URL = "http://127.0.0.1:8000"


def test_register_and_login_ui():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Go to register page
        page.goto(f"{BASE_URL}/register")

        # Fill form
        page.fill('input[name="username"]', "testuser123")
        page.fill('input[name="email"]', "test123@example.com")
        page.fill('input[name="first_name"]', "Test")
        page.fill('input[name="last_name"]', "User")
        page.fill('input[name="password"]', "SecurePass123!")
        page.fill('input[name="confirm_password"]', "SecurePass123!")

        # Submit
        page.click('button:has-text("Register")')

        # Wait for redirect to login
        page.wait_for_url("**/login")

        # Login
        page.fill('input[name="username"]', "testuser123")
        page.fill('input[name="password"]', "SecurePass123!")

        page.click('button:has-text("Sign in")')

        # Verify dashboard loads
        page.wait_for_url("**/dashboard")
        assert "Calculations Dashboard" in page.content()

        browser.close()