<?php

namespace App\Http\Controllers;

use App\Models\Link;
use App\Models\Biolink;
use Common\Core\BaseController;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class UsernameCheckController extends BaseController
{
    public function check(Request $request)
    {
        $request->validate([
            'username' => 'required|string|min:3|max:50|regex:/^[a-z0-9_-]+$/i',
        ]);

        $username = strtolower(trim($request->get('username')));

        // Check if username exists in links (alias)
        $linkExists = Link::where('alias', $username)->exists();
        
        // Check if username exists in link groups/biolinks (alias)
        $linkGroupExists = \App\Models\LinkGroup::where('alias', $username)->exists();

        $available = !$linkExists && !$linkGroupExists;

        return $this->success([
            'available' => $available,
            'message' => $available 
                ? 'Username is available' 
                : 'Username is already taken',
        ]);
    }
}

