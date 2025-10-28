import{ supabase } from '../utils/supabase';

export default defineEventHandler(async (event) => {
    const { data, error } = await supabase
        .from('data')
        .select('*').limit(10);

    if (error) {
        return {
            statusCode: 500,
            body: {
                message: 'Error fetching data',
                error
            }
        };
    }

    return {
        
        data
    };
});