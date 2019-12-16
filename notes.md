# Authentication Notes

A user belongs to a single role

A role can have multiple users

[users] \*---1 [roles]

we need a FK

the FK goes on the many side

the FK goes on the 'users' table.

we need to change the schema of the users table

every schema change is implemented by making a new migration
