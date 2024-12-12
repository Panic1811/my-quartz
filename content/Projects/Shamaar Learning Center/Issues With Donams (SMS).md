---
{"publish":true,"PassFrontmatter":true,"password":1234}
---

## The Problem

The evaluation of Donams revealed that while initial meetings were productive and the platform offers various modules, the staff has faced significant issues. Customer support blames the school staff for not updating data, yet recurring issues are often fixed in their backend without preventing reoccurrence. This suggests underlying problems with the system's stability and usability, affecting overall efficiency. 

They have provided a custom solution for the school which included onboarding; however, the lack of documentation has resulted in frequent back-and-forth communication with their project manager when issues in real time occur. Additionally, his responses have made the staff less inclined to seek further assistance. Let's go over their issues:

## Pain Points - Per User

### 1. Rajni (HOD)

**Position:** Head of Department
**User Role:** HOD

---
#### **Teacher & HOD - Attendance Sync Issues:**

**1. Process For Teacher To Mark Attendance:**

1. Opens App
2. Goes to Attendance
3. Is assigned classes by Admin, clicks students - present or absent - save and submit
   
**2. Issues:** 

- Teacher clicks save and submit, but report is not seen by HOD level. 
- It requires multiple save and submits from teacher, to show in HOD report view

**3. Temporary Fix:**

HOD can see which teachers did not submit for the time frame (Check → go to teacher and ask them to resubmit form, usually works after 2 tries)

**4. What Donams CS Has Said:**
  
<mark style="background: #BBFABBA6;">Donams said outdated software on phone, connection issue & for HOD keep refreshing (continually refreshing rarely works)</mark> → However issue still seems to be occurring

> [!Note]-  **Notes:**
>   After evaluation, we are still unsure what might be causing these issues - have not physically tested solutions provided by Donam. Need to speak with Donams and find evergreen solution. ❓

---
#### **Work Shifts - Teachers & 2 Divisions**

**1. Issues:**

Teacher can only be assigned to only 1 Class (grade, ex KG-2), when in reality, some are in charge of 2 divisions (only 2 teachers are doing 2 divisions currently) - example: *PRE KG A*, and *PRE KG B* are being handled by the same teacher but they're at different times in the day. This means they can only fill out attendance, marks, etc. for 1 class/division, even though they manage 2 in reality.

**2. Temporary Fix:**

HOD every morning, gets manual lists from the teachers for the extra classes (that have no teachers assigned) for student attendance. HOD does this 4x a day. 
- From her view on Donams, she picks grade, date, etc. and manually marks attendance and saves. *While this currently does not take too much time, it can provide discrepancies in the future when other module's and their features require the missing class's data to present* - which needs to be manually filled out for all (Ex: Attendance, Student Progress Reports, etc.).
  
**3. What Donams CS Has Said:**

<mark style="background: #BBFABBA6;">Donam's said functionality for this currently doesn't exist. Their solution was to merge the divisions (KG A & KG B → KG-AB)</mark> → However, this is not a realistic solution and will have its own issues (too many students in this 1 division then, as well as cant segment divisions in reports - all merged). 

> [!Note]- **Notes:**
> 
> My suggestion for a fix was: 
> 
> 1. To create 2 id's for the same teacher and assign each ID to her relevant class/division → *However, payroll can get messed up, can cause duplication errors in others reports too.* *Also requires teachers to log in and log out frequently.* Potential Temporary Fix - might be the way to go for now, so teachers can mark exam results too 👍
>    –
> 2. We saw that a Teacher (role), on desktop, has the ability to go to *Attendance Class Wise* which allows them to be able to mark any class similar to what the HOD does. This is an extra step for the teacher, but once learnt, they can mark 2 divisions/classes. *However, this was not available on mobile, so we tried to add it as a field in mobile permissions for the Teacher role, but we feel we input the wrong syntax as it did not work.* Can we add Attendance_Class_Wise to mobile app for Teachers. 👎
> 

---
#### Student Progress Cards

**1. Process For Teacher To Mark Exams:**

Twice in 1 term, students do assessments and the teacher manually grades it and uploads marks of students on Donams.

**2. Issues:**

Exam Offline → Exam Reports → Student Progress Report → Select Student

1. When HOD is cross checking student's progress report, if there are error's in the exam report view, the HOD cannot manually edit this report, it requires the teacher (role) to do so (work around being the HOD logs in as the teacher and does it). 
   
   ![Issues With Donams (SMS) - Shamaar-20241206024253493.png](../../Images/Issues%20With%20Donams%20(SMS)%20-%20Shamaar-20241206024253493.png)

2. From HOD POV: After requesting Donams, she can now manually edit the total attendance in the report view (working days & no of days present per term) in the Student Progress Report. Ideally this should be automated, however, they were doing manual attendance between April to October, and then in October started using Donams - so there is missing data. However, its not even automatically updating for the data already present in Donams. *Terms defined in Exam Offline>Class Terms*

   ![Issues With Donams (SMS) - Shamaar-20241206024551168.png|594](../../Images/Issues%20With%20Donams%20(SMS)%20-%20Shamaar-20241206024551168.png)

**3. What Donams CS Has Said:**

I believe have not spoken to Donams regarding the manual entry for the exams. <mark style="background: #BBFABBA6;">They did introduce the ability to manually edit attendance in the report view though. </mark>

> [!Note]- **Notes:**
> 
> 1.  HOD (role) does not have access to edit the mark-sheet, either from the student progress report view or from the *Academics Activities → Mark Entry* module- only teachers do. **No way found to manually edit permissions for this** ❓
> 	- HOD needs Exam Offline>Mark Entry role permission?
> 	- Donams needs to include manual entry in student progress view for exam results, as they did for attendance. 
> 	  
> 	  ![Issues With Donams (SMS) - Shamaar-20241206025449167.png](../../Images/Issues%20With%20Donams%20(SMS)%20-%20Shamaar-20241206025449167.png)

---
### 2. Gleny (HR)

**Position:** HR
**User Role:** Human Resource, Accountant, Accounts Manager

---
#### Attendance for Staff/Employees

1. Cant do attendance for staff manually. By end November, Donam's are going to install NFC staff check-in, but currently cant update  staff/employee attendance manually.
		- *Don't have module yet, which allows NFC tagging for employees (?)* - hopefully this includes manual entry too. 
2. When searching for employee (HR → Employee Information), in the search field, the search queries show employee's that are inactive. 

> [!Note]- **Notes:**
> 
> 1. We found that employee attendance can be tracked in Academic Activities → Daily Attendance Report. *This is probably where the NFC tag's punch in / punch out time results will be shown?* ❓
> 2. For manual entry of teachers (maybe staff as well), we found Teachers → Teacher's Attendance module feature, but it doesn't show anything and ideally should be manually editable. *Wondering what this module feature does or if it only works when NFC device is implemented.* ❓

--- 
### 3. Shaimy (Accountant)

**Position:** Accountant
**User Role:**  Accountant

---
#### Accounting Module

**1. Issues:**
1. Have to manually enter data in tables (no upload for CSV available) - in Assign Fees 
2. No Bulk Import options (CSV)
	- Playing catchup on data from term 1 - very time consuming

**2. Temporary Solutions:**

Priority:
1. Day to day, use Donams to fill in data for current day & onwards
2. Catchup on data from *September* onwards (term 2)
3. When priority 1 & 2 are done, fill in catchup data for term 1 in Donams.

**3. To Check:**
1. If data is now **not** filled in excel anymore, and **only** on Donams - need to make sure they have an export feature to see all this data → for backup purposes, and if transitioning in future to new SMS.

**4. What Donams CS Has Said:**

<mark style="background: #BBFABBA6;">Asked Donams, they said CSV upload for Assign Fees won't be implemented, has to be done manually.</mark> 👎

>[!Note]- **Notes:**
>1. We found a module feature that was disabled (Import Old Fees). We need to test importing old fees template to see if it works. *Fee Payments → Import old fees*. How do the field's work, can we add more? What format required? ❓
>2. *Fee Payments → Fee Reports → Collection Amount + Other Reports* We found these report shows the data similar to what we track on the excel. However, having a custom export CSV feature where we can chose what all fields to export would be good to have (Similar to exporting Student Information, reference below:) ❓
>   
> ![Issues With Donams (SMS) - Shamaar-20241206033917671.png](../../Images/Issues%20With%20Donams%20(SMS)%20-%20Shamaar-20241206033917671.png)

---
### 4. Tina (Admissions Officer)

**Position:** Admissions Officer
**User Role:**  Admin

---
#### Student List Export

**1. Issues:**

1. With student lists, admins can add users with tons of fields and parameters to fill out. However, for the export or table view, we can't add columns. Limited export features, cant export with all fields.

>[!Note]- **Notes:**
>1. Student lists can be custom exported with all fields, under  *Students → Student Information* on admin view (can provide this module feature to any role based on permissions). Student list can be uploaded/imported as CSV too. 👍
>   	- Additionally, paramteres and fields that needs to be filled when adding a new student can be edited by an Admin at *Students → Student Settings → Select 🖱️Edit - Student Form Fields*

---
#### Reminders/Notifications

**Issues:**

Cannot set alerts or reminders when fields we set are not meeting criteria (ex, emirates ID expiring in 1 month, we should get a reminder or notification). 

>[!Note]- **Notes:**
>Possible (temporary?) solution is to regularly download student lists, and use excel to manually filter emirates Id's expiring in x days - but if they can include this as a reminder or notification, as seen its possible other modules (ex employees), would be better. ❓

---
#### **Re-Registration Student Admission:** 

**Issues:**

If a student had already enrolled, left, and now wants to join again. When creating a student ID for him, perhaps some criteria check to see if they exist already. 

>[!Note]- **Notes:**
>Parents Heading in student creation form have a toggle "existing parent", perhaps this can exist for students too, if it doesn't break anything?) ❓

---
#### **Waiting Period - Cooldown Period:**

**Issues:**

If a student joins, part of the registration fees the parents pay includes a student ID card. However, to create a student ID card, we must create a new student entry to get the assigned registration number. In scenarios where this students decides to quit after 7 days, have we lost a user slot? 

>[!Note]- **Notes:**
>According to Shyni, our seat count is based on 500 **active** students. So it seems fine to add this student in Donams as if he quits, we can just mark him as inactive and it wont effect our 500 seats. To be confirmed.❓


## Next Steps?

### 1. Existing Questions - Need Clarity

> [!question] After evaluation, we are still unsure what might be causing these issues - have not physically tested solutions provided by Donam. Need to speak with Donams and find evergreen solution.
> > [!info] 

> [!question] We found that employee attendance can be tracked in Academic Activities → Daily Attendance Report. *This is probably where the NFC tag's punch in / punch out time results will be shown?*
> > [!info] 

> [!question] For manual entry of teachers (maybe staff as well), we found Teachers → Teacher's Attendance module feature, but it doesn't show anything and ideally should be manually editable. *Wondering what this module feature does or if it only works when NFC device is implemented.*
> > [!info] 

> [!question] We found a module feature that was disabled it (Import Old Fees). We need to test importing old fees template to see if it works. *Fee Payments → Import old fees*. How do the field's work, can we add more? What format required?
> > [!info] 

> [!question] *Fee Payments → Fee Reports → Collection Amount + Other Reports* We found these report shows the data similar to what we track on the excel. However, having a custom export CSV feature where we can chose what all fields to export would be good to have (Similar to exporting Student Information, reference below:)
> > [!info] 

> [!question] Possible (temporary?) solution is to regularly download student lists, and use excel to manually filter emirates Id's expiring in x days - but if they can include this as a reminder or notification, as seen its possible other modules, would be better.
> > [!info] 

> [!question] Parents Heading in student creation form have a toggle "existing parent", perhaps this can exist for students too, if it doesn't break anything?
> > [!info] 

> [!question] According to Shyni, our seat count is based on 500 **active** students. So it seems fine to add this student in Donams as if he quits, we can just mark him as inactive and it wont effect our 500 seats. To be confirmed.
> > [!info] 


>[!question]
> 1.  HOD (role) does not have access to edit the mark-sheet, either from the student progress report view or from the *Academics Activities → Mark Entry* module- only teachers do. **No way found to manually edit permissions for this** ❓
> 	- HOD needs Exam Offline>Mark Entry role permission?
> 	- Donams needs to include manual entry in student progress view for exam results, as they did for attendance. 
> 	  
> 	  ![Issues With Donams (SMS) - Shamaar-20241206025449167.png](../../Images/Issues%20With%20Donams%20(SMS)%20-%20Shamaar-20241206025449167.png)

### 2. Some Extra Questions For Donams CS

1. Custom Reports View?
2. More Export/import CSV Functionality?
   - What's the format to be followed? Can we add more fields? (Ex Import Old Fees)
3. Backup Possibility? 
4. How Does the Pricing Model Work?
5. Is the 500 Seat Cap Just Active Users or Active + Inactive?
6. Can You Provide Documentation?
8. More…

### 3. New School Management System

If issues cannot be resolved, and there is functionality that is needed which is crucial, begin exploring other School Management Systems.

**New Features MANDATORY In New SMS:**
1. To be determined….


