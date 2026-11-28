-- Optional migration for databases created before paid plans were removed.
-- schema.sql no longer creates these objects. Run this once to clean up an
-- existing database. The application no longer reads any of it.
DROP TABLE IF EXISTS public.subscriptions CASCADE;
ALTER TABLE public.profiles DROP COLUMN IF EXISTS stripe_customer_id;

-- Re-create the signup trigger function without the subscriptions insert.
-- Copy handle_new_user() from schema.sql and run it after the drops above.
