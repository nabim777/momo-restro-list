# Sign-up Page Test Plan

## Application Overview

Functional and negative QA coverage for the Vue sign-up page at /sign-up. The page contains name, email, and password inputs, a Sign up button, and a Login link. Successful registration posts user data to the backend and stores user-info before redirecting home. Each scenario must start with a fresh unauthenticated browser state and isolated/reset backend data, with no user-info in localStorage. During exploration, submitting the blank form displayed “Signup done” and redirected to the home page; required-field and API-failure scenarios below are intended to catch this behavior as a defect.

## Test Scenarios

### 1. Sign-up form and registration

**Seed:** `seed.spec.ts`

#### 1.1. Render the sign-up form for an unauthenticated visitor

**File:** `tests/sign-up/render-sign-up.spec.ts`

**Steps:**
  1. Start with a fresh browser context with localStorage cleared and open http://localhost:8080/sign-up.
    - expect: The URL remains /sign-up and the page heading is “Sign Up”.
  2. Inspect the page controls and their initial values.
    - expect: The cooker logo is visible.
    - expect: Name, email, and password inputs are present and empty, with the expected placeholders.
    - expect: The password input masks entered characters.
    - expect: A “Sign up” button and a “Login” link are available.

#### 1.2. Reject submission when all fields are empty

**File:** `tests/sign-up/required-fields.spec.ts`

**Steps:**
  1. Start with a fresh unauthenticated browser state and open /sign-up.
    - expect: The Sign Up heading and sign-up form controls are visible.
  2. Click “Sign up” without entering a name, email, or password.
    - expect: The form displays clear required-field validation and remains on /sign-up.
    - expect: No registration POST is sent to /user.

**Current result:** Browser exploration showed the app displays “Signup done”, redirects to /, and sets user-info for an empty submission. The automated test should fail against this behavior until the required-field validation is fixed.

#### 1.3. Reject an invalid email address

**File:** `tests/sign-up/invalid-email.spec.ts`

**Steps:**
  1. Start with a fresh unauthenticated state and open /sign-up.
    - expect: The sign-up form is displayed.
  2. Enter a valid name, an invalid email such as “not-an-email”, and a password, then click “Sign up”.
    - expect: The email value is rejected with clear validation feedback.
    - expect: No account is created, no success alert appears, and the visitor remains on /sign-up.

#### 1.4. Register successfully with valid unique details

**File:** `tests/sign-up/register-success.spec.ts`

**Steps:**
  1. Start with a fresh unauthenticated state and a backend dataset without the test email. Open /sign-up.
    - expect: The sign-up form is displayed.
  2. Enter a non-empty name, a valid unique email address, and a permitted password; click “Sign up”.
    - expect: Exactly one registration is created with the submitted name, email, and password fields.
    - expect: A success confirmation is shown and the app navigates to the home page.
    - expect: A user-info session is stored for the newly registered user.

#### 1.5. Handle registration with an email that already exists

**File:** `tests/sign-up/duplicate-email.spec.ts`

**Steps:**
  1. Start with a fresh unauthenticated browser state and ensure the backend already contains a user with the email reserved for this test.
    - expect: The sign-up form is displayed.
  2. Enter a name, the existing email, and a password, then click “Sign up”.
    - expect: The duplicate registration is rejected with a clear error.
    - expect: The app does not show success, create another user, or set user-info.
    - expect: The visitor remains on the sign-up page and can correct the form.

#### 1.6. Keep the form usable when registration fails at the server

**File:** `tests/sign-up/backend-error.spec.ts`

**Steps:**
  1. Start with a fresh unauthenticated state and configure the registration endpoint to return a server error or become unavailable.
    - expect: The sign-up form is displayed.
  2. Enter otherwise valid registration details and click “Sign up”.
    - expect: A clear failure message is shown without an unhandled/rejected request disrupting the page.
    - expect: The app does not show success, create a session, or navigate home.
    - expect: The entered values remain available for correction or retry.

#### 1.7. Navigate from sign-up to Login

**File:** `tests/sign-up/login-navigation.spec.ts`

**Steps:**
  1. Start with a fresh unauthenticated state and open /sign-up.
    - expect: The sign-up page is displayed.
  2. Click the “Login” link.
    - expect: The browser navigates to /login.
    - expect: The Login heading, name-or-email input, password input, Login button, and Sign Up link are displayed.

#### 1.8. Redirect an existing session away from sign-up

**File:** `tests/sign-up/authenticated-redirect.spec.ts`

**Steps:**
  1. Start with a valid user-info value in localStorage and navigate directly to /sign-up.
    - expect: The app redirects to the home page instead of displaying the sign-up form.
    - expect: The authenticated user session remains intact.